import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import logo from "../logo.png";

const Nav = async () => {
  // console.log(session);
  return (
    <nav className="flex justify-between relative  md:h-10 md:items-center z-50 ">
      <div className="z-50 hidden md:block cursor-pointer text-3xl ml-2 mb-1  pt-1">
        <Link href="/">
          <Image src={logo} alt="Logo of Borlaman" width={60} height={120} />
        </Link>
      </div>

      <ul className=" hidden md:flex md:justify-center  text-blue-900  ">
        <li className=" hover:text-yellow-600  mr-2">
          <Link href="/about">About Us</Link>
        </li>
        <li className="  hover:text-yellow-600  mr-2">
          <Link href="/services">Services</Link>
        </li>
      </ul>
      <MobileNav />
    </nav>
  );
};

export default Nav;
