"use client";

import ThemedText from "@/components/ThemedText";
import Contacts from "@/components/Contacts";

export default function Contact() {
  return (
    <div className="flex w-3/4 flex-col items-center justify-center">
      <div className="flex flex-col gap-4 md:w-2/3">
        <ThemedText className=" text-3xl font-semibold md:text-5xl">
          About Me!
        </ThemedText>
        <ThemedText className="flex gap-4">
          I am a young developer who is passionate about being active and fixing
          things. I love sports, music, and cars. I played soccer at a regional
          level back in Highschool and I regularly play guitar, piano, and bass.
          I also love cars and I am currently working on and fixing an old car.
          I love Japan as well and I have learnt Japanese in CEVAS back in
          2019-2021. I am a very curious person and I love to learn new things.
        </ThemedText>
        <div className="flex flex-col">
          <ThemedText className="font-medium">Please Contact me at:</ThemedText>
          <ThemedText className="">ivanleopoldoc@gmail.com</ThemedText>
          <ThemedText className="relative flex items-center py-5">
            <div className="flex-grow border-t border-[#F2DFD9]"></div>
            <span className="mx-4 flex-shrink font-bold text-[#F2DFD9]">
              OR
            </span>
            <div className="flex-grow border-t border-[#F2DFD9]"></div>
          </ThemedText>
          <Contacts />
        </div>
      </div>
    </div>
  );
}
