
import { Button } from "@/components/ui/button";
import { GraduationCap, Sparkles } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation = ({ currentPage, onPageChange }: NavigationProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-blue-500/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center space-x-3 cursor-pointer group transition-all duration-300 hover:scale-105"
            onClick={() => onPageChange('home')}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative">
              <GraduationCap className={`h-10 w-10 text-blue-600 transition-all duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`} />
              {isHovered && (
                <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 animate-pulse" />
              )}
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Electives@Trichy
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onPageChange('home')}
              className={`text-sm font-semibold transition-all duration-300 relative overflow-hidden px-4 py-2 rounded-lg ${
                currentPage === 'home' 
                  ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/25' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <span className="relative z-10">Home</span>
            </button>
            <button
              onClick={() => onPageChange('explore')}
              className={`text-sm font-semibold transition-all duration-300 relative overflow-hidden px-4 py-2 rounded-lg ${
                currentPage === 'explore' 
                  ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/25' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <span className="relative z-10">Explore</span>
            </button>
          </div>

          <Button 
            onClick={() => onPageChange('explore')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 border-0"
          >
            <span className="flex items-center gap-2">
              Get Started
              <Sparkles className="h-4 w-4" />
            </span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
