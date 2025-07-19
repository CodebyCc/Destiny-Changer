import Link from "next/link";

function Buttons() {
  return (
    <div className="">
      <Link
        href="/services"
        className="bg-gray-800 px-12 rounded-3xl py-2 mr-1 text-white text-sm font-semibold hover:bg-yellow-700 transition-all animate-pulse"
      >
        Our Services
      </Link>
    </div>
  );
}

export default Buttons;
