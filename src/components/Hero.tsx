
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Filter, Users, Sparkles, Star, Zap } from "lucide-react";

interface HeroProps {
  onExploreClick: () => void;
}

const Hero = ({ onExploreClick }: HeroProps) => {
  return (
    <section className="relative overflow-hidden py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 rounded-full px-6 py-3 mb-8 shadow-lg backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-blue-600 animate-pulse" />
              <span className="text-sm font-semibold text-blue-700">✨ Your Ultimate Course Guide</span>
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
              Your Gateway to
              <span className="relative block mt-2">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                  Perfect Electives
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl -z-10 animate-pulse"></div>
              </span>
            </h1>
          </div>
          
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            Discover, filter, and explore elective courses at NIT Trichy with detailed reviews, 
            grading patterns, and professor insights all in one 
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> premium platform</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button 
              onClick={onExploreClick}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl shadow-blue-500/25 hover:shadow-3xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 border-0 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Zap className="h-6 w-6 group-hover:animate-pulse" />
                Explore Now
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 group-hover:animate-shimmer"></div>
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-slate-300 bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white hover:border-blue-300 hover:text-blue-700 px-10 py-6 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="group text-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Comprehensive Database</h3>
              <p className="text-slate-600 leading-relaxed">Browse through all available electives, minors, and program-specific courses with detailed information</p>
            </div>
            
            <div className="group text-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                <Filter className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Smart Filtering</h3>
              <p className="text-slate-600 leading-relaxed">Filter by semester, department, and course type to find exactly what you need quickly</p>
            </div>
            
            <div className="group text-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Student Reviews</h3>
              <p className="text-slate-600 leading-relaxed">Read authentic reviews and grading patterns from your fellow students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
