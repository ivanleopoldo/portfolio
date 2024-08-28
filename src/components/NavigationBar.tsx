import Link from "next/link";
import { TiHome } from "react-icons/ti";
import { IoIosRocket } from "react-icons/io";
import { HiBriefcase } from "react-icons/hi";
import { FaCode } from "react-icons/fa";

type NavigationBarProps = {
  activeIndex: number;
};

export default function NavigationBar({ activeIndex }: NavigationBarProps) {
  const colors = {
    active: "text-[#F2622E]",
    inactive: "text-[#262626]",
  };

  return (
    <div className="m-6 rounded-full bg-[#F2DFD9] p-4 md:fixed md:left-6 md:top-1/2 md:m-0 md:-translate-y-1/2 md:transform">
      <ul className="flex flex-row justify-between text-4xl md:flex-col md:gap-3 md:text-2xl">
        <li className={activeIndex === 0 ? colors.active : colors.inactive}>
          <Link href="#home">
            <TiHome />
          </Link>
        </li>
        <li className={activeIndex === 1 ? colors.active : colors.inactive}>
          <Link href="#languages">
            <FaCode />
          </Link>
        </li>
        <li className={activeIndex === 2 ? colors.active : colors.inactive}>
          <Link href="#projects">
            <HiBriefcase />
          </Link>
        </li>
        <li className={activeIndex === 3 ? colors.active : colors.inactive}>
          <Link href="#contact">
            <IoIosRocket />
          </Link>
        </li>
      </ul>
    </div>
  );
}
