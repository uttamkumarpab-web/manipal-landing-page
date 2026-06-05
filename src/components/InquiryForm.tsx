"use client";

import { useState } from "react";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
  "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal",
];

const courses = ["MBA", "MCA", "MCom", "MSc", "MA", "BBA", "BCA", "BCom", "BA"];

export default function InquiryForm({ id = "mainForm" }: { id?: string }) {
  const [submitting, setSubmitting] = useState(false);

  return (
    <form action="/api/submit" method="POST" id={id} onSubmit={() => setSubmitting(true)}>
      <input
        type="text" name="name" placeholder="Full Name*" required
        className="w-full border border-gray-300 p-3 rounded-lg mb-3 text-sm"
      />
      <input
        type="email" name="email" placeholder="Email ID*" required
        className="w-full border border-gray-300 p-3 rounded-lg mb-3 text-sm"
      />
      <input
        type="tel" name="contactno" placeholder="Mobile Number*" required
        pattern="^[6789][0-9]{9}$" maxLength={10}
        className="w-full border border-gray-300 p-3 rounded-lg mb-3 text-sm"
      />
      <select name="selectcourse" required defaultValue=""
        className="w-full border border-gray-300 p-3 rounded-lg mb-3 text-sm bg-white">
        <option value="" disabled>Select Course*</option>
        {courses.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>
      <select name="state" required defaultValue=""
        className="w-full border border-gray-300 p-3 rounded-lg mb-3 text-sm bg-white">
        <option value="" disabled>Select State*</option>
        {indianStates.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>
      <div className="mb-3">
        <span className="text-xs text-gray-600">Your personal information is secure with us</span>
      </div>
      <button
        type="submit" disabled={submitting}
        className="w-full bg-[#ff6b35] text-white font-medium py-3 px-8 rounded-lg flex items-center justify-center gap-1"
      >
        <span className="btn-text">{submitting ? "Processing..." : "Apply Now"}</span>
        {submitting && (
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        )}
      </button>
    </form>
  );
}
