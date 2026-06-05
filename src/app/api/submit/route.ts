import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

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

    const { error: dbError } = await supabase.from("lead").insert({
      id: crypto.randomUUID(),
      name,
      email,
      contactno,
      selectcourse,
      state,
    });

    if (dbError) throw dbError;

    await resend.emails.send({
      from: "Manipal <onboarding@resend.dev>",
      to: email,
      subject: "Thank you for your inquiry",
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We have received your inquiry regarding <strong>${selectcourse}</strong>.</p>
        <p>Our team will get back to you at <strong>${email}</strong> or <strong>${contactno}</strong> shortly.</p>
        <br/>
        <p>Best regards,<br/>Manipal Admissions Team</p>
      `,
    });

    const referer = request.headers.get("referer") ?? "/";
    return NextResponse.redirect(new URL(referer));
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
