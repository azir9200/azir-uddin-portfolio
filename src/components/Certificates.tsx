import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";
import { Award, Calendar, FileDown } from "lucide-react";
import { Button } from "./ui/button";

const Certificates = () => {
  const certificates = [
    {
      title: "QuickBooks Online Advanced Certification",
      issuer: "Intuit QuickBooks",
      date: "2023",
      credentialId: "QB-PA-2023-SA001",
      description:
        "Advanced certification in QuickBooks Online bookkeeping, setup, and client management.",
      skills: [
        "QuickBooks Online",
        "Bookkeeping",
        "Financial Reports",
        "Client Management",
      ],
      download: "/QuickBooks Online Advanced Certification.pdf",
    },
    {
      title: "Xero Advisor Certification",
      issuer: "Xero",
      date: "2023",
      credentialId: "XR-ADV-2023-001",
      description:
        "Professional certification in Xero cloud accounting software and best practices.",
      skills: ["Xero", "Cloud Accounting", "Bank Reconciliation", "Payroll"],
      download: "/Xero Advisor Certification.pdf",
    },
    // {
    //   title: "Certified Bookkeeper (CB)",
    //   issuer: "National Association of Certified Public Bookkeepers",
    //   date: "2022",
    //   credentialId: "CB-2022-7845",
    //   description:
    //     "Comprehensive certification covering all aspects of professional bookkeeping.",
    //   skills: [
    //     "General Ledger",
    //     "Financial Statements",
    //     "Tax Preparation",
    //     "Compliance",
    //   ],
    // },
    // {
    //   title: "Advanced Excel for Accounting",
    //   issuer: "Microsoft",
    //   date: "2022",
    //   credentialId: "MS-EXL-ADV-2022",
    //   description:
    //     "Advanced Excel skills specifically for accounting and financial analysis.",
    //   skills: ["Excel", "Pivot Tables", "VLOOKUP", "Financial Modeling"],
    // },
  ];
  const { theme } = useTheme();
  console.log(theme);

  return (
    <section
      id="certificates"
      className={`py-20 bg-gradient-to-br from-blue-50 to-indigo-50 ${
        theme == "dark" ? " text-white" : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications & Credentials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications that validate my expertise in modern
            accounting software and bookkeeping practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle
                        className={`text-lg font-bold text-gray-900${
                          theme == "dark" ? " text-white" : ""
                        }`}
                      >
                        {cert.title}
                      </CardTitle>
                      <p className="text-sm text-blue-600 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p
                  className={` leading-relaxed ${
                    theme == "dark" ? " text-gray-400" : "text-gray-600"
                  }`}
                >
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="pt-2 border-t border-gray-100 flex justify-between items-center">
                  <p
                    className={` text-xs ${
                      theme == "dark" ? " text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <span className="font-medium">Credential ID:</span>{" "}
                    {cert.credentialId}
                  </p>
                  <a href={cert.download} download>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
                    >
                      <FileDown className="w-5 h-5 mr-2" />
                      Certification
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
