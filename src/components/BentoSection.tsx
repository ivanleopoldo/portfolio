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
        "grid rounded-xl bg-[#353434] px-4 py-3 text-[#F2DFD9] md:px-6 md:py-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
