import Link from "next/link";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

function Footer() {
  const date = new Date();
  return (
    <footer className="bg-gray-950 text-white py-8 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 - Brand */}
        <div>
          <h2 className="text-xl font-bold">Destiny Changer</h2>
          <p className=" font-bold mt-2 text-yellow-400">THE TRAVEL EXPERTS.</p>
        </div>

        {/* Column 2 - Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-400 hover:text-white">
                Services
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-gray-400 mt-2">
            Email:info@destinychangertravelandtour.com
          </p>
          <p className="text-gray-400">
            Phone : +2332070110170 / +233538536079
          </p>
        </div>
      </div>

      <div className=" flex justify-center mt-6">
        <div className="flex ">
          <Link
            className="px-2"
            href="https://www.instagram.com/dctravelandtour?igsh=a2xzZW90emE1c3N4&utm_source=qr"
            target="_blank"
          >
            <FaInstagram size={30} />
          </Link>
          <Link
            className="px-2"
            href="https://www.facebook.com/share/1HfKz6p9qo/?mibextid=wwXIfr"
            target="_blank"
          >
            <FaFacebook size={30} spacing={40} />
          </Link>
          {/* <Link className="px-2" href="">
            <FaTwitter size={30} spacing={40} />
          </Link> */}
          {/* <Link className="px-2" href="/">
            <FaSnapchat size={30} spacing={40} />
          </Link> */}
          <Link
            className="px-2"
            href="https://www.tiktok.com/@dctravelandtour?_t=ZM-8yDhMmw2x6L&_r=1"
            target="_blank"
          >
            <FaTiktok size={30} spacing={40} />
          </Link>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center text-gray-500 mt-2 text-sm">
        &copy; {new Date().getFullYear()} Destiny Changer Travel And Tours
        Ghana. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
