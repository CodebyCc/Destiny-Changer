import Section from "./components/Section";
import Main from "./components/Main";
import OurStory from "./components/OurStory";

export default async function Home() {
  return (
    <div className="">
      <Section />
      <h1 className="text-4xl mt-0 bottom-20 relative text-center text-gray-950 animate-pulse">
        Our Services
      </h1>
      <Main />
      <OurStory />
    </div>
  );
}
