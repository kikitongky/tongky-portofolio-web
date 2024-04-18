import Navbar from "../../Fragments/Navbar";
import Badge from "../../Elements/badge";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiFigma,
  SiBootstrap,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiVite,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandDribbbleFilled } from "react-icons/tb";
import { IoGameController, IoMail, IoLogoLinkedin } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import AnimatedTextH1 from "../../Elements/AnimatedText";

const About = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 to-gray-950 flex flex-col justify-between">
      <header className="flex justify-center relative">
        <Navbar className="w-full"></Navbar>
      </header>
      <main className="flex flex-col sm:flex-row items-center justify-center mt-20 mx-10 md:mx-32 gap-9 sm:gap-24">
        <div className="flex-1">
          <AnimatedTextH1 className="text-6xl sm:text-8xl font-bold text-white">
            Rizky Adi Saputra
          </AnimatedTextH1>
          <h3 className="text-xl text-slate-300 my-5">
            Frontend Web Developer
          </h3>

          <p className="text-white">
            I am an enthusiatic and passionate frontend web developer. I am
            skilled in HTML, CSS, Javascript, and work often with React.
          </p>
          <a
            href="mailto:tongkytongky@gmail.com"
            className="flex items-center justify-center w-fit gap-2 mt-6 text-gray-900 font-semibold bg-white/70 hover:bg-white/100 py-2 px-6 rounded transition-all"
          >
            Contact Me <IoMail />
          </a>
          <div className="mt-10 flex gap-4">
            <a href="/" className="text-white text-2xl">
              <SiGithub />
            </a>
            <a href="/" className="text-white text-2xl">
              <AiFillInstagram />
            </a>
            <a href="/" className="text-white text-2xl">
              <IoLogoLinkedin />
            </a>
            <a href="/" className="text-white text-2xl">
              <TbBrandDribbbleFilled />
            </a>
          </div>
        </div>

        <div className="mt-10 w-full flex-1 sm:mt-0 self-center">
          <h3 className="text-2xl text-white font-bold mb-5 flex items-center gap-2">
            <IoGameController />
            Stack
          </h3>
          <div>
            <div className="flex gap-2 flex-wrap">
              <Badge className="bg-[#F06529] text-white">
                <SiHtml5 /> HTML5
              </Badge>
              <Badge className="bg-[#264de4] text-white">
                <SiCss3 />
                CSS
              </Badge>
              <Badge className="bg-[#F0DB4F] text-black">
                <SiJavascript />
                Javascript
              </Badge>
            </div>
            <div className="flex gap-2 mt-6 flex-wrap">
              <Badge className="bg-gradient-to-r from-[#f24e1e] via-[#a259ff] to-[#0acf83] text-white">
                <SiFigma />
                Figma
              </Badge>
              <Badge className="bg-[#062030] text-[#2db3ca] ring-1 ring-[#2db3ca]">
                <SiTailwindcss />
                TailwindCSS
              </Badge>
              <Badge className="bg-[#563d7c] text-white">
                <SiBootstrap />
                Bootstrap
              </Badge>
              <Badge className="bg-[#24a6c7] text-white">
                <SiReact />
                ReactJS
              </Badge>
              <Badge className="bg-[#0c0c0c] text-white ring-1 ring-white">
                <TbBrandNextjs />
                NextJS
              </Badge>
            </div>
            <div className="flex gap-2 mt-6 flex-wrap">
              <Badge className="bg-[#2e5c23] text-white">
                <SiNodedotjs />
                NodeJS
              </Badge>
              <Badge className="bg-[#f5f5f5] text-black">
                <SiExpress />
                ExpressJS
              </Badge>
              <Badge className="bg-[#001e2b] text-[#00ed24] ring-1 ring-[#00ed24]">
                <SiMongodb />
                MongoDB
              </Badge>
            </div>
            <div className="flex gap-2 mt-6 flex-wrap">
              <Badge className="bg-gradient-to-r from-[#35a1cc] via-[#faf604d2] to-[#aa2fe2] text-white ring-1 ring-white">
                <SiVite />
                Vite
              </Badge>
              <Badge className="bg-[#f34f29] text-white">
                <SiGit />
                Git
              </Badge>
              <Badge className="bg-[#0c0c0c] text-white ring-1 ring-white">
                <SiGithub />
                GitHub
              </Badge>
            </div>
          </div>
          <a
            href="/project"
            className="flex items-center justify-center w-fit gap-2 mt-8 text-gray-900 font-semibold bg-white/70 hover:bg-white/100 py-2 px-6 rounded transition-all"
          >
            My Project
          </a>
        </div>
      </main>
      <footer className="text-slate-400 text-center mt-10 text-[0.75rem] bg-gray-900 py-2">
        <span>©2024 Tongky</span>
      </footer>
    </div>
  );
};

export default About;
