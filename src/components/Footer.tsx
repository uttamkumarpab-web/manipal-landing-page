import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0C1446] text-white text-center py-8 px-4 relative">
      <div className="max-w-6xl mx-auto space-y-4 font-bold">
        <p className="text-sm leading-relaxed">
          <span className="text-yellow-400 font-semibold">Disclaimer:</span>{" "}
          We act solely as an information partner and do not conduct or
          facilitate admissions to Manipal. For admissions, please visit the
          official Manipal website or contact the university directly. Manipal
          University holds full rights to request changes or removal of any
          non-relevant content. Images used are for illustrative purposes only
          and do not directly represent the respective colleges or universities.
        </p>

        <p className="text-sm leading-relaxed">
          As an Authorized Enrollment Partner (AEP) of Manipal Online, we
          display and showcase program information of Manipal Online. Admission,
          program delivery, and examination are solely managed by Manipal
          Online, and as an AEP, we have no role to play in it.
        </p>

          <p className="text-sm mt-4">
  © {new Date().getFullYear()} https://onlinedegree-manipal.co.in/ | All rights reserved
</p>

<div className="mt-2 flex justify-center gap-6">
  <Link href="/privacy-policy" className="underline text-yellow-400 hover:text-white">
    Privacy Policy
  </Link>
  <Link href="/terms-and-conditions" className="underline text-yellow-400 hover:text-white">
    Terms &amp; Conditions
  </Link>
</div>
      </div>
    </footer>
  );
}