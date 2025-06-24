import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Download, Mail } from "lucide-react";

const About = () => {
  const highlights = [
    "5+ years of professional bookkeeping experience",
    "Expert in QuickBooks Online, Xero, and Wave accounting",
    "Managed 25+ diverse client portfolios simultaneously",
    "99.8% accuracy rate in financial record maintenance",
    "Specialized in e-commerce and service-based businesses",
  ];

  const values = [
    {
      title: "Accuracy",
      description:
        "Maintaining precise financial records with meticulous attention to detail",
    },
    {
      title: "Reliability",
      description:
        "Consistent delivery of high-quality work within agreed timelines",
    },
    {
      title: "Transparency",
      description:
        "Clear communication and honest reporting on all financial matters",
    },
    {
      title: "Growth",
      description:
        "Helping businesses make informed decisions through financial insights",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated professional committed to delivering exceptional
            bookkeeping services that drive business success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className="flex justify-center animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Card className="overflow-hidden shadow-2xl border-0 group">
              <div className="relative">
                <img
                  src="/lovable-uploads/d5c47e6b-98a7-4689-95b5-f01b3fdf120d.png"
                  alt="Sadia Akter - Professional Accountant"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Card>
          </div>

          <div
            className="space-y-8 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Meet <span className="text-blue-600">Sadia Akter</span>
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I am a dedicated and experienced professional accountant
                  specializing in comprehensive bookkeeping services for small
                  to medium-sized businesses. With over 5 years of hands-on
                  experience, I have developed expertise in maintaining accurate
                  financial records, ensuring regulatory compliance, and
                  providing actionable financial insights.
                </p>
                <p>
                  Currently serving as a Senior Bookkeeper at{" "}
                  <span className="font-semibold text-blue-600">
                    Pride Six Solutions
                  </span>
                  , I manage diverse client portfolios with a focus on accuracy,
                  efficiency, and client satisfaction. My approach combines
                  traditional accounting principles with modern cloud-based
                  solutions to deliver streamlined financial management.
                </p>
                <p>
                  I believe that well-organized financial records are the
                  foundation of business success. My goal is to provide
                  businesses with clear, accurate, and timely financial
                  information that empowers informed decision-making and
                  sustainable growth.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Professional Highlights
              </h4>
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-600">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Core Values
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="space-y-2">
                    <Badge
                      variant="outline"
                      className="text-blue-700 border-blue-200"
                    >
                      {value.title}
                    </Badge>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group">
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button variant="outline" className="group">
                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
