"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import ThemedText from "@/components/ThemedText";

type LoadingScreenProps = {
  onFadeOut?: () => void;
  className?: string;
};

export default function LoadingScreen({
  onFadeOut,
  className,
}: LoadingScreenProps) {
  const [isFading, setFading] = useState(false);

  useEffect(() => {
    if (onFadeOut) {
      setFading(true);
      const timer = setTimeout(() => {
        onFadeOut();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [onFadeOut]);

  return (
    <div
      className={cn(
        "flex h-screen w-full bg-[#F2622E] items-center justify-center transition-all duration-500",
        className,
        {
          "bg-[#262626] opacity-0": isFading,
          "opacity-100": !isFading,
        },
      )}
    >
      <ThemedText className="font-bold text-4xl">Loading...</ThemedText>
    </div>
  );
}
