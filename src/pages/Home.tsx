import ThemedText from "@/components/ThemedText";
import Image from "next/image";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col-reverse items-center justify-center gap-2 md:flex-row md:gap-5">
        <div className="flex flex-col">
          <ThemedText className="text-3xl font-medium md:text-6xl">
            <div className="flex flex-col text-center md:text-end">
              <div className="-mb-3">IVAN</div>
              <div className="-mb-2">LEOPOLDO</div>
              <p className="inline-block bg-gradient-to-r from-[#592EF2] to-[#F2622E] bg-clip-text text-xl font-extralight text-transparent">
                Portfolio
              </p>
            </div>
          </ThemedText>
          <div className="flex flex-col-reverse justify-center md:flex-row md:justify-between">
            <div className="mt-8 px-36 md:mt-0 md:px-0">
              <Image
                src={"/scroll.png"}
                alt="scroll down"
                width={110}
                height={110}
              />
            </div>
            <div className="flex flex-row justify-center gap-2 text-[#F2DFD9]">
              <RiInstagramFill size={35} />
              <FaFacebookSquare size={35} />
              <FaGithub size={35} />
            </div>
          </div>
        </div>
        <div className="px-28 md:p-0">
          <Image src={"/photo.png"} alt="prof pic" width={400} height={400} />{" "}
        </div>
      </div>
    </div>
  );
}
