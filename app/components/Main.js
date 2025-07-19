import Image from "next/image";
import { details } from "../lib/details";
// import truck2 from "../../public/truck2.jpg";
import student from "../../public/students.jpg";

function Main() {
  return (
    <div className="">
      {details.map((detail) => (
        <div
          className="grid items-center grid-cols-1 md:grid-cols-2  gap-4"
          key={detail.id}
        >
          <div
            id={detail.link}
            className="mt-8 md:mt-0 motion-preset-slide-right-lg"
          >
            <div>
              <h1 className="text-center text-3xl md:text-4xl  mb-6 animate-pulse">
                {detail.heading}
                <span className=""> Assistance.</span>
              </h1>
            </div>

            <p className="pl-5 text-lg leading-relaxed ">{detail.content}</p>
          </div>
          <div className="relative -z-30 aspect-square motion-preset-slide-left-lg ">
            <Image
              src={detail.image}
              fill
              className="object-contain"
              alt="Image of borlaman"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
