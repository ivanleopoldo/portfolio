import React from "react";

type CardProps = {
  title?: string;
  description?: string;
  photo?: string;
  link?: string;
};

export default function Card({ title, description, photo, link }: CardProps) {
  return (
    <div className="w-64 overflow-hidden text-ellipsis rounded-lg bg-[#353434] shadow-lg md:h-64">
      <a href={link} target="_blank" rel="noreferrer">
        <img
          className="h-20 w-full rounded-tl-lg rounded-tr-lg object-cover"
          src={photo}
          alt={photo}
        />
        <div className="px-6 py-4 text-[#F2DFD9]">
          <div className="mb-2 text-xl font-medium">{title}</div>
          <div className="overflow-hidden text-ellipsis text-sm">
            {description}
          </div>
        </div>
      </a>
    </div>
  );
}
