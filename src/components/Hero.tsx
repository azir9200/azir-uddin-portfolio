import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Facebook, FileDown, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
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
                  Khadiza Binta Mahbub
                </span>
              </h1>
              <h2 className="text-xl lg:text-3xl font-light">
                <span style={{ color: "#149ECA", fontWeight: "bold" }}>
                  <Typewriter
                    words={[
                      "Professional Accountant & Bookkeeper.",
                      "Specializing in Clean-Up & Catch-Up.",
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
                I’m a freelance bookkeeper with 7 years of experience working
                with small to medium-sized businesses across various industries.
                I specialize in maintaining accurate financial records,
                reconciling bank accounts, and processing payroll
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="/Khadiza Binta Mahbub.pdf" download>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
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
                href={"https://www.facebook.com/profile.php?id=61556759051499"}
                target="blank"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href={"http://www.linkedin.com/in/khadizaremotebookkeeper"}
                target="blank"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/8801974905960"
                target="blank"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>

              <a
                href="mailto:khadiza.atscorporation@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>

              <a
                href={"https://www.fiverr.com/s/qD3QbyX"}
                target="blank"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <TbBrandFiverr className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end my-8 md:my-0">
            <div className="relative">
              <div className="md:w-[400px] md:h-[400px] w-[320px] h-[320px] rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-white p-4">
                  <img
                    src="/Khadija3.jpg"
                    alt="Sadia Akter"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-white font-bold text-lg">BK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
