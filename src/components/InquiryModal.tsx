"use client";

import InquiryForm from "./InquiryForm";

export default function InquiryModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-md mx-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-end p-4 pb-0">
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
        </div>
        <div className="px-6 pb-6 pt-0">
          <div className="text-center mb-4">
            <p className="mb-1 font-semibold">Speak to an admission counsellor</p>
            <ul className="flex justify-center gap-2 text-green-600 font-semibold text-[11px]">
              <li className="flex items-center gap-1">
                <svg width="15" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                Online Exam
              </li>
              <li className="flex items-center gap-1">
                <svg width="15" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                100% Placement Assistance
              </li>
            </ul>
          </div>
          <InquiryForm id="modalForm" />
        </div>
      </div>
    </div>
  );
}
