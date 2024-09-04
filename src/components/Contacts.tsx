import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Contacts() {
  return (
    <div className="flex flex-row justify-center gap-2 text-[#F2DFD9]">
      <a
        className="hover:text-[#8D41BF]"
        href="https://instagram.com/ivanleocl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiInstagramFill size={35} />
      </a>
      <a
        className="hover:text-[#7A36D9]"
        href="https://facebook.com/milktt1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare size={35} />
      </a>
      <a
        className="hover:text-[#592EF2]"
        href="https://github.com/ivanleopoldo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={35} />
      </a>
    </div>
  );
}
