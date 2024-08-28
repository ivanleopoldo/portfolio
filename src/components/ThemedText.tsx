import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children: JSX.Element | JSX.Element[] | string;
};

export default function ThemedText({ className, children }: Props) {
  return <span className={cn("text-[#F2DFD9]", className)}>{children}</span>;
}
