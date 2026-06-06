import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const contactno = formData.get("contactno") as string;
    const selectcourse = formData.get("selectcourse") as string;
    const state = formData.get("state") as string;

    if (!name || !email || !contactno) {
      return NextResponse.json(
        { error: "Name, email, and contact number are required." },
        { status: 400 }
      );
    }

    const { error: dbError } = await supabaseAdmin.from("lead").insert({
      id: crypto.randomUUID(),
      name,
      email,
      contactno,
      selectcourse,
      state,
    });

    if (dbError) throw dbError;

    await resend.emails.send({
      from: "MBA Online Info <noreply@mbaonlineinfo.com>",
      to: email,
      subject: "Thank you for your inquiry",
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We have received your inquiry regarding <strong>${selectcourse}</strong>.</p>
        <p>Our team will get back to you at <strong>${email}</strong> or <strong>${contactno}</strong> shortly.</p>
        <br/>
      `,
    });

    await resend.emails.send({
      from: "MBA Online Info <noreply@mbaonlineinfo.com>",
      to: "noreply@mbaonlineinfo.com",
      subject: `New inquiry: ${name} - ${selectcourse}`,
      html: `
        <h2>New Lead Submission</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold">Name:</td><td style="padding:8px">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Email:</td><td style="padding:8px">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Phone:</td><td style="padding:8px">${contactno}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Course:</td><td style="padding:8px">${selectcourse}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">State:</td><td style="padding:8px">${state}</td></tr>
        </table>
      `,
    });

    return NextResponse.redirect(new URL("/thank-you", request.url));
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
