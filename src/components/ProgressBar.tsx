import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  progress: string;
};

export default function ProgressBar({ label, progress }: Props) {
  return (
    <div className="grid grid-rows-1 grid-cols-2 gap-4 items-center">
      <div>{label}</div>
      <div className="w-full bg-[#262626] rounded-full h-2.5">
        <div
          className={cn("bg-red-500 h-2.5 rounded-full", {
            "bg-green-500": parseInt(progress) >= 50,
          })}
          style={{ width: progress }}
        ></div>
      </div>
    </div>
  );
}
