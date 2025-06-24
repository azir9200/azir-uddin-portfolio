import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart3,
  BookOpen,
  Calculator,
  FileCheck,
  PieChart,
  TrendingUp,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Custom Bookkeeping",
      description:
        "Tailored bookkeeping solutions designed to meet your specific business requirements, ensuring accuracy and compliance.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Clean-Up & Catch-up Services",
      description:
        "Professional cleanup of messy books, reconciliation services, and getting your finances back on track.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "QuickBooks Online Bookkeeping",
      description:
        "Expert QuickBooks Online setup, maintenance, and optimization for streamlined financial management.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "E-commerce Bookkeeping",
      description:
        "Specialized services for online businesses, inventory management, and multi-platform reconciliation.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Xero Bookkeeping Services",
      description:
        "Professional Xero accounting services, setup, training, and ongoing support for cloud-based accounting.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Wave Bookkeeping Services",
      description:
        "Complete Wave accounting solutions for small businesses, including setup and ongoing maintenance.",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-background transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Do I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Efficiently tailored services designed to meet unique financial
            needs and ensure long-term success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border border-border shadow-lg hover:-translate-y-2 animate-fade-in hover-lift bg-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
