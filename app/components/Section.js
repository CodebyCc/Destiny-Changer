import Buttons from "./Buttons";
// import bg from "../../public/travel-background.jpg";
import bg from "../../public/bg.png";
import Image from "next/image";
import Link from "next/link";

function Section() {
  return (
    <main className=" mt-20 md:mt-34 h-screen">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative  text-center text-blue-950 ">
        <div className="text-4xl md:text-6xl font-semibold md:font-bold motion-preset-slide-up-lg  ">
          <h1 className=" mb-4">Welcome to</h1>
          <h1 className="mb-4">
            Destiny Changer Travel And{" "}
            <span className="text-yellow-600">Tour</span>
          </h1>
        </div>
        <p className="text-md leading-relaxed mb-6 motion-preset-slide-down-lg ">
          Your No1 Stop for Travel Assitance Solutions in Ghana. 𝐓𝐇𝐄 MOST
          TRUSTED TRAVEL AGENTS.
        </p>
        {/* <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1> */}

        <Buttons />
      </div>
    </main>
  );
}

export default Section;
