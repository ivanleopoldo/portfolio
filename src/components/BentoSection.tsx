import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children?:
    | React.ReactNode
    | React.ReactNode[]
    | JSX.Element
    | JSX.Element[]
    | string;
};

export default function BentoSection({ className, children }: Props) {
  return (
    <div
      className={cn(
        "grid  rounded-xl bg-[#353434] px-6 py-4 text-[#F2DFD9]",
        className,
      )}
    >
      {children}
    </div>
  );
}
