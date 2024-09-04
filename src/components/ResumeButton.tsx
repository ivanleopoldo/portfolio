import React from "react";
import Link from "next/link";
import { LuDownload } from "react-icons/lu";

export default function ResumeButton() {
  return (
    <div className="fixed right-4 top-6">
      <Link
        className="bg-[#262626] flex gap-2 flex-row justify-center items-center px-4 py-2 rounded-lg border border-[#F2DFD9] text-[#F2DFD9] text-sm"
        href="/api/download/RESUME-IvanLeopoldo.pdf"
      >
        <LuDownload size={16} />
        <p>My Resume</p>
      </Link>
    </div>
  );
}
