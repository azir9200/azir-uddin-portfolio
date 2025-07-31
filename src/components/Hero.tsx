import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { FileDown, Mail } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Header from "./Header";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <Header />
      <div className="container mx-auto px-6 pt-20">
        <div className=" flex justify-between items-center md:flex-row flex-col-reverse">
          <div className="space-y-8">
            <div className="md:space-y-4 space-y-2">
              <h1 className="text-xl lg:text-4xl font-bold text-gray-900 leading-tight">
                <span className={`${theme == "dark" ? " text-white" : ""}`}>
                  Hi, I'm{" "}
                </span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  MD AZIR UDDIN
                </span>
              </h1>
              <h2 className="text-xl lg:text-3xl font-light">
                <span style={{ color: "#149ECA", fontWeight: "bold" }}>
                  <Typewriter
                    words={[
                      "Full-Stack MERN Developer.",
                      "Specializing in Clean, Scalable Web Apps & API Integration.",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={100}
                    delaySpeed={2000}
                  />
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                I’m a MERN stack developer with experience building full-stack
                web applications using React, Typescript, NextJs, Redux, RTK
                Query and Node.js MongoDB, Express.js. I help businesses bring
                their ideas to life by creating clean, scalable, and responsive
                web solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="/Developer1_azir.pdf" download>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-900 hover:to-purple-900 text-white px-8"
                >
                  <FileDown className="w-5 h-5 mr-2" />
                  Resume
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className="px-8">
                  Contact Me
                </Button>
              </a>
            </div>

            <div className="flex space-x-6">
              <a
                href={"https://www.facebook.com/azirzaif/about"}
                target="blank"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href={"https://www.linkedin.com/in/azir9200"}
                target="blank"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href={"https://github.com/azir9200"}
                target="blank"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/00351920319177"
                target="blank"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>

              <a
                href="mailto:aziruddinn83@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end my-8 md:my-0">
            <div className="relative">
              <div className="md:w-[400px] md:h-[400px] w-[320px] h-[320px] rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-white p-4">
                  <img
                    src="https://i.ibb.co/TDBzHJqC/azir-1.jpg"
                    alt="Azir Uddin"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-400 to-red-500 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-white font-bold text-lg">AZIR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
