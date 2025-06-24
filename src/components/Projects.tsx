import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectDetailsData } from "@/lib/Data/ProjectAllData";
import { ExternalLink, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  // const projects = [
  //   {
  //     title: "E-Commerce Bookkeeping",
  //     description: "Comprehensive bookkeeping solution for multi-platform e-commerce businesses with automated inventory tracking.",
  //     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  //     category: "Bookkeeping",
  //     color: "from-blue-500 to-cyan-500"
  //   },
  //   {
  //     title: "Clean-Up & Catch Up Services",
  //     description: "Professional financial cleanup and reconciliation services to get businesses back on track.",
  //     image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
  //     category: "Financial Cleanup",
  //     color: "from-green-500 to-emerald-500"
  //   },
  //   {
  //     title: "Real Estate Bookkeeping",
  //     description: "Specialized accounting services for real estate professionals and property management companies.",
  //     image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
  //     category: "Real Estate",
  //     color: "from-purple-500 to-pink-500"
  //   },
  //   {
  //     title: "Consultancy & Online Bookkeeping",
  //     description: "Remote bookkeeping consultancy with cloud-based solutions for modern businesses.",
  //     image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=250&fit=crop",
  //     category: "Consultancy",
  //     color: "from-orange-500 to-red-500"
  //   }
  // ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Achievements & Projects
          </h2>
          <p className="text-xl text-gray-600">
            Showcasing successful bookkeeping and financial management projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {ProjectDetailsData?.slice(0, 4).map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden shadow-lg border-0 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}
                >
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Link to={`/project/${project.id}`}>
                      {" "}
                      <Button
                        size="sm"
                        variant="secondary"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
