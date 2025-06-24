import { useActiveSection } from "@/hooks/useActiveSection";
import { Briefcase, Home, LayoutDashboard, Mail } from "lucide-react";

const BottomNavigation = () => {
  const activeSection = useActiveSection();

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Services", href: "#services", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: LayoutDashboard },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const getSectionColor = (section: string) => {
    const colorMap: Record<string, string> = {
      home: "from-blue-600 to-purple-600",
      services: "from-green-500 to-emerald-500",
      skills: "from-orange-500 to-red-500",
      about: "from-purple-500 to-pink-500",
      experience: "from-indigo-500 to-blue-500",
      certificates: "from-yellow-500 to-orange-500",
      education: "from-teal-500 to-cyan-500",
      projects: "from-pink-500 to-rose-500",
      contact: "from-gray-600 to-gray-800",
    };
    return colorMap[section] || "from-blue-600 to-purple-600";
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border shadow-lg md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.slice(1);

          return (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-300 min-w-0`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium truncate">{item.name}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
