
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Filter, Users } from "lucide-react";

interface HeroProps {
  onExploreClick: () => void;
}

const Hero = ({ onExploreClick }: HeroProps) => {
  return (
    <section className="relative overflow-hidden py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Your Gateway to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
              Perfect Electives
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Discover, filter, and explore elective courses at NIT Trichy with detailed reviews, 
            grading patterns, and professor insights all in one premium platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={onExploreClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
            >
              Explore Now
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Comprehensive Database</h3>
              <p className="text-slate-600">Browse through all available electives, minors, and program-specific courses</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Smart Filtering</h3>
              <p className="text-slate-600">Filter by semester, department, and course type to find exactly what you need</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Student Reviews</h3>
              <p className="text-slate-600">Read authentic reviews and grading patterns from your fellow students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
