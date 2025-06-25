import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useTheme } from "@/contexts/ThemeContext";

const TechnicalProficiency = () => {
  const { theme } = useTheme();
  const coreSkills = [
    { name: "Full-Stack JavaScript Development (MERN) ", level: 100 },
    { name: "RESTful API Design & Integration", level: 100 },
    { name: "Frontend Development with React.js", level: 98 },
    { name: "Backend Development with Node.js & Express.js", level: 100 },
    { name: "Database Design & Management (MongoDB, Mongoose) ", level: 95 },
    {
      name: "Version Control & Collaboration (Git, GitHub) ",
      level: 100,
    },
    {
      name: "Responsive UI Design & Styling (Tailwind CSS, ShadCN UI) ",
      level: 100,
    },
  ];

  const softSkills = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Javascript",
    "Typescript",
  ];
  // Frameworks / Libraries
  const tools = [
    "Node.js",
    "Next.js",
    "Express.js",
    "React.js",
    "Redux",
    "Zod",

    "Git & Github",
    "Vercel",
    "Netlify",
    "Render",
    "DaisyUi",
    "MUI",
    "Redux",
    "RTK Query",
    "JWT",
    "MaterialUi",
  ];

  // Databases
  const Industry = [
    "Prisma",
    "MySQL",
    "Firebase",
    "MongoDB",
    "Mongoose",
    "PostgreSQL",
  ];
  // DevTools
  const DevTools = ["Git/GitHub", "REST", "Postman", "Vercel", "render"];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Proficiency
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive expertise in modern full-stack web development using
            the MERN stack (MongoDB, Express.js, React, Node.js).
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card
              className="shadow-lg border-0 animate-fade-in hover-lift"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <CardTitle
                  className={`text-2xl font-bold text-gray-900 ${
                    theme == "dark" ? " text-white" : ""
                  }`}
                >
                  Core Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {coreSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="space-y-2 animate-fade-in"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="flex justify-between items-center">
                      <span
                        className={`font-medium ${
                          theme == "dark" ? " text-gray-400" : "text-gray-700"
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-blue-600">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-3" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card
              className="shadow-lg border-0 animate-fade-in hover-lift"
              style={{ animationDelay: "0.4s" }}
            >
              <CardHeader>
                <CardTitle
                  className={`text-xl font-bold text-gray-900 ${
                    theme == "dark" ? " text-white" : ""
                  }`}
                >
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-lg hover:from-blue-200 hover:to-purple-200 animate-fade-in"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className="shadow-lg border-0 animate-fade-in hover-lift"
              style={{ animationDelay: "0.6s" }}
            >
              <CardHeader>
                <CardTitle
                  className={`text-xl font-bold text-gray-900 ${
                    theme == "dark" ? " text-white" : ""
                  }`}
                >
                  Frameworks / Libraries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-green-200 text-blue-800 text-lg hover:bg-green-50 animate-fade-in"
                      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card
              className="shadow-lg border-0 animate-fade-in hover-lift"
              style={{ animationDelay: "0.6s" }}
            >
              <CardHeader>
                <CardTitle
                  className={`text-xl font-bold text-gray-900 ${
                    theme == "dark" ? " text-white" : ""
                  }`}
                >
                  Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {Industry.map((tool, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-green-200 text-blue-800 text-lg hover:bg-green-50 animate-fade-in"
                      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card
              className="shadow-lg border-0 animate-fade-in hover-lift"
              style={{ animationDelay: "0.6s" }}
            >
              <CardHeader>
                <CardTitle
                  className={`text-xl font-bold text-gray-900 ${
                    theme == "dark" ? " text-white" : ""
                  }`}
                >
                  DevTools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {DevTools.map((tool, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-green-200 text-blue-800 text-lg hover:bg-green-50 animate-fade-in"
                      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalProficiency;
