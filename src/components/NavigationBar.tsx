import Link from "next/link";
import { TiHome } from "react-icons/ti";
import { IoIosRocket } from "react-icons/io";
import { HiBriefcase } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

type NavigationBarProps = {
  activeIndex: number;
};

export default function NavigationBar({ activeIndex }: NavigationBarProps) {
  const colors = {
    active: "text-orange-600",
    inactive: "text-black",
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 transform rounded-full bg-zinc-200 p-4">
      <ul className="flex flex-col gap-3 text-2xl">
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
          <Link href="#timeline">
            <FaGraduationCap />
          </Link>
        </li>
        <li className={activeIndex === 4 ? colors.active : colors.inactive}>
          <Link href="#contact">
            <IoIosRocket />
          </Link>
        </li>
      </ul>
    </div>
  );
}
