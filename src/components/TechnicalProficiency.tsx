import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useTheme } from "@/contexts/ThemeContext";

const TechnicalProficiency = () => {
  const { theme } = useTheme();
  const coreSkills = [
    { name: "Financial Record Management", level: 100 },
    { name: "Account Categorization & Reconciliation", level: 100 },
    { name: "Accounts Payable & Receivable", level: 98 },
    { name: "General Ledger Management", level: 100 },
    { name: "Payroll Processing", level: 95 },
    {
      name: "Proficiency in Accounting Software (QuickBooks, Xero)",
      level: 100,
    },
    { name: "Preparing Financial Reports", level: 100 },
  ];

  const softSkills = [
    "Problem Solving",
    "Attention to Detail",
    "Time Management",
    "Communication",
    "Analytical Thinking",
    "Team Work",
  ];

  const tools = [
    "QuickBooks Online",
    "Xero",
    "Wave Accounting",
    "Excel",
    "Google Sheets",
    "Paychex",
    "Gusto",
    "Bill.com",
    "Hubdoc",
    "A2X",
  ];
  const Industry = [
    "Retail and E-commerce",
    "Real Estate",
    "Salon and Spa",
    "Hospitality and Tourism",
    "Chartered Accountant Firms",
    "Technology and IT Services",
    "Logistics and Transportation",
    "Entertainment and Media",
    "Startups and Small Businesses",
  ];

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
            Comprehensive expertise in modern accounting and bookkeeping
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
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200 animate-fade-in"
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
                  Tools & Software
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-green-200 text-green-800 hover:bg-green-50 animate-fade-in"
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
                  Industry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {Industry.map((tool, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-green-200 text-green-800 hover:bg-green-50 animate-fade-in"
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
