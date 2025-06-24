import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const { theme } = useTheme();
  const experiences = [
    {
      position: "Freelance Bookkeeper",
      company: "Pride Biz Solutions",
      location: "Remote",
      duration: "2023 - 2025",
      type: "Full-time",
      description:
        "Leading bookkeeping operations for multiple clients, ensuring accurate financial records and compliance. Specialized in QuickBooks Online and Xero implementations.",
      achievements: [
        "Managing client bookkeeping accounts. ",
        "Recording and categorizing transactions.",
        "Reconciling bank and credit card accounts",
        "Ensuring compliance and accuracy in records.",
        "Handling multiple clients across industries. ",
        "Ensuring compliance and accuracy in records.",
        "Handling multiple clients across industries. ",
      ],
      technologies: [
        "QuickBooks Online",
        "Xero",
        "Wave",
        "Excel",
        "Google Sheets",
      ],
    },
    {
      position: "Bookkeeping Specialist",
      company: "FinanceFlow Solutions",
      location: "Dhaka, Bangladesh",
      duration: "2019 - 2022",
      type: "Full-time",
      description:
        "Provided comprehensive bookkeeping services for retail and service-based businesses, focusing on accurate financial reporting and tax preparation.",
      achievements: [
        " Logging every transaction using internal software.",
        " Posing all customer Invoices and Bills from vendors.",
        "Responsible for LC, and other transactions.",
      ],
      technologies: ["QuickBooks Desktop", "Excel", "Sage", "FreshBooks"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of growth and expertise in bookkeeping and financial
            management across diverse business environments.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl  border transition-all duration-500  shadow-lg hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <Building className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle
                        className={`text-xl font-bold text-gray-900 ${
                          theme == "dark" ? " text-white" : ""
                        }`}
                      >
                        {exp.position}
                      </CardTitle>
                      <p className="text-lg text-blue-600 font-semibold">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p
                  className={`text-gray-600 leading-relaxed ${
                    theme == "dark" ? " text-white" : ""
                  }`}
                >
                  {exp.description}
                </p>

                <div>
                  <h4
                    className={`font-semibold text-gray-900 mb-3 ${
                      theme == "dark" ? " text-white" : ""
                    }`}
                  >
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start gap-2"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span
                          className={`${
                            theme == "dark" ? " text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4
                    className={`font-semibold text-gray-900 mb-3 ${
                      theme == "dark" ? " text-white" : ""
                    }`}
                  >
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-gradient-to-r from-gray-100 to-blue-100 text-gray-800"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
