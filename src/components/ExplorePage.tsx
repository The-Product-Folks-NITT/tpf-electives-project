
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Filter, BookOpen, Clock, Star, Sparkles, GraduationCap } from "lucide-react";
import CourseDetails from "@/components/CourseDetails";

// Mock data for courses
const mockCourses = [
  {
    id: 1,
    title: "Machine Learning Fundamentals",
    department: "Computer Science",
    type: "Program Elective",
    semester: 6,
    professor: "Dr. Rajesh Kumar",
    rating: 4.5,
    reviews: 28,
    credits: 3,
    description: "Introduction to machine learning algorithms and their applications in real-world scenarios"
  },
  {
    id: 2,
    title: "Digital Signal Processing",
    department: "Electronics",
    type: "Open Elective",
    semester: 5,
    professor: "Dr. Priya Sharma",
    rating: 4.2,
    reviews: 15,
    credits: 3,
    description: "Signal processing techniques for digital systems and communication"
  },
  {
    id: 3,
    title: "Business Analytics",
    department: "Management",
    type: "Minor",
    semester: 7,
    professor: "Dr. Arun Patel",
    rating: 4.7,
    reviews: 22,
    credits: 4,
    description: "Data-driven decision making in business contexts using statistical methods"
  },
  {
    id: 4,
    title: "Web Development",
    department: "Computer Science",
    type: "Open Elective",
    semester: 4,
    professor: "Dr. Sneha Reddy",
    rating: 4.8,
    reviews: 35,
    credits: 3,
    description: "Full-stack web development with modern frameworks and technologies"
  },
  {
    id: 5,
    title: "Environmental Engineering",
    department: "Civil Engineering",
    type: "Program Elective",
    semester: 6,
    professor: "Dr. Vikram Singh",
    rating: 4.1,
    reviews: 18,
    credits: 3,
    description: "Environmental protection and sustainable engineering practices"
  },
  {
    id: 6,
    title: "Financial Markets",
    department: "Management",
    type: "Minor",
    semester: 5,
    professor: "Dr. Kavitha Nair",
    rating: 4.4,
    reviews: 12,
    credits: 4,
    description: "Understanding financial markets and investment strategies"
  },
  {
    id: 7,
    title: "Data Structures & Algorithms",
    department: "Computer Science",
    type: "Program Elective",
    semester: 4,
    professor: "Dr. Amit Verma",
    rating: 4.6,
    reviews: 42,
    credits: 4,
    description: "Advanced data structures and algorithmic problem-solving techniques"
  },
  {
    id: 8,
    title: "Digital Marketing",
    department: "Management",
    type: "Open Elective",
    semester: 6,
    professor: "Dr. Pooja Singh",
    rating: 4.3,
    reviews: 31,
    credits: 3,
    description: "Modern digital marketing strategies and social media analytics"
  },
  {
    id: 9,
    title: "Robotics & Automation",
    department: "Mechanical Engineering",
    type: "Program Elective",
    semester: 7,
    professor: "Dr. Kiran Gupta",
    rating: 4.5,
    reviews: 26,
    credits: 4,
    description: "Industrial robotics, automation systems, and control mechanisms"
  },
  {
    id: 10,
    title: "Mobile App Development",
    department: "Computer Science",
    type: "Open Elective",
    semester: 5,
    professor: "Dr. Ankit Jain",
    rating: 4.7,
    reviews: 38,
    credits: 3,
    description: "Native and cross-platform mobile application development"
  },
  {
    id: 11,
    title: "Quantum Computing",
    department: "Physics",
    type: "Minor",
    semester: 8,
    professor: "Dr. Neha Agarwal",
    rating: 4.9,
    reviews: 14,
    credits: 4,
    description: "Quantum algorithms, quantum gates, and quantum information theory"
  },
  {
    id: 12,
    title: "Blockchain Technology",
    department: "Computer Science",
    type: "Open Elective",
    semester: 7,
    professor: "Dr. Rahul Mehta",
    rating: 4.4,
    reviews: 29,
    credits: 3,
    description: "Cryptocurrency, smart contracts, and distributed ledger systems"
  },
  {
    id: 13,
    title: "Renewable Energy Systems",
    department: "Electrical Engineering",
    type: "Program Elective",
    semester: 6,
    professor: "Dr. Sunita Rao",
    rating: 4.2,
    reviews: 21,
    credits: 3,
    description: "Solar, wind, and other renewable energy technologies"
  },
  {
    id: 14,
    title: "UI/UX Design",
    department: "Design",
    type: "Open Elective",
    semester: 5,
    professor: "Prof. Maya Krishnan",
    rating: 4.8,
    reviews: 33,
    credits: 3,
    description: "User interface design principles and user experience research"
  },
  {
    id: 15,
    title: "Artificial Intelligence",
    department: "Computer Science",
    type: "Program Elective",
    semester: 7,
    professor: "Dr. Sanjay Mishra",
    rating: 4.6,
    reviews: 41,
    credits: 4,
    description: "AI fundamentals, neural networks, and intelligent systems"
  },
  {
    id: 16,
    title: "Operations Research",
    department: "Industrial Engineering",
    type: "Minor",
    semester: 6,
    professor: "Dr. Ravi Teja",
    rating: 4.1,
    reviews: 19,
    credits: 3,
    description: "Optimization techniques and decision-making in complex systems"
  },
  {
    id: 17,
    title: "Cloud Computing",
    department: "Computer Science",
    type: "Open Elective",
    semester: 6,
    professor: "Dr. Deepika Sharma",
    rating: 4.5,
    reviews: 27,
    credits: 3,
    description: "Cloud platforms, distributed computing, and service-oriented architecture"
  },
  {
    id: 18,
    title: "Cybersecurity",
    department: "Computer Science",
    type: "Program Elective",
    semester: 8,
    professor: "Dr. Vinod Kumar",
    rating: 4.7,
    reviews: 24,
    credits: 4,
    description: "Network security, cryptography, and ethical hacking techniques"
  },
  {
    id: 19,
    title: "Game Development",
    department: "Computer Science",
    type: "Open Elective",
    semester: 5,
    professor: "Prof. Arjun Shah",
    rating: 4.9,
    reviews: 36,
    credits: 3,
    description: "2D/3D game engines, game physics, and interactive entertainment design"
  },
  {
    id: 20,
    title: "Internet of Things",
    department: "Electronics",
    type: "Program Elective",
    semester: 7,
    professor: "Dr. Meera Joshi",
    rating: 4.3,
    reviews: 30,
    credits: 3,
    description: "IoT architecture, sensor networks, and connected device ecosystems"
  }
];

interface ExplorePageProps {
  onBack: () => void;
}

const ExplorePage = ({ onBack }: ExplorePageProps) => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [filters, setFilters] = useState({
    semester: "all",
    department: "all",
    type: "all",
    search: ""
  });

  const departments = ["Computer Science", "Electronics", "Management", "Civil Engineering", "Mechanical Engineering", "Electrical Engineering", "Physics", "Design", "Industrial Engineering"];
  const courseTypes = ["Program Elective", "Open Elective", "Minor"];
  const semesters = [3, 4, 5, 6, 7, 8];

  const filteredCourses = mockCourses.filter(course => {
    return (
      (filters.semester === "all" || course.semester.toString() === filters.semester) &&
      (filters.department === "all" || course.department === filters.department) &&
      (filters.type === "all" || course.type === filters.type) &&
      (!filters.search || course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
       course.professor.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  if (selectedCourse) {
    return <CourseDetails course={selectedCourse} onBack={() => setSelectedCourse(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="flex items-center gap-2 hover:bg-white/60 hover:shadow-lg transition-all duration-300 rounded-xl px-6 py-3"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
            <div className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                Explore Courses
              </h1>
              <Sparkles className="h-6 w-6 text-yellow-500 animate-pulse" />
            </div>
          </div>

          {/* Enhanced Filters */}
          <Card className="mb-8 border-0 shadow-2xl bg-white/80 backdrop-blur-xl animate-fade-in" style={{animationDelay: '0.1s'}}>
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Filter className="h-6 w-6 text-blue-600" />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Filter Courses
                </span>
                <span className="text-2xl">🔍</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="relative group">
                  <Search className="absolute left-4 top-4 h-5 w-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                  <Input
                    placeholder="Search courses..."
                    value={filters.search}
                    onChange={(e) => setFilters({...filters, search: e.target.value})}
                    className="pl-12 h-12 rounded-xl border-2 border-slate-200 hover:border-blue-300 focus:border-blue-500 transition-all duration-300 bg-white/60"
                  />
                </div>
                
                <Select value={filters.semester} onValueChange={(value) => setFilters({...filters, semester: value})}>
                  <SelectTrigger className="h-12 rounded-xl border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 bg-white/60">
                    <SelectValue placeholder="📅 Semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Semesters</SelectItem>
                    {semesters.map(sem => (
                      <SelectItem key={sem} value={sem.toString()}>Semester {sem}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={filters.department} onValueChange={(value) => setFilters({...filters, department: value})}>
                  <SelectTrigger className="h-12 rounded-xl border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 bg-white/60">
                    <SelectValue placeholder="🏢 Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    {departments.map(dept => (
                      <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={filters.type} onValueChange={(value) => setFilters({...filters, type: value})}>
                  <SelectTrigger className="h-12 rounded-xl border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 bg-white/60">
                    <SelectValue placeholder="📚 Course Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {courseTypes.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button 
                  variant="outline" 
                  onClick={() => setFilters({semester: "all", department: "all", type: "all", search: ""})}
                  className="h-12 rounded-xl border-2 border-slate-200 hover:border-red-300 hover:bg-red-50 transition-all duration-300 bg-white/60"
                >
                  🗑️ Clear Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Counter */}
          <div className="mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="bg-white/60 rounded-xl p-4 border border-white/40 shadow-lg backdrop-blur-sm">
              <p className="text-slate-700 text-lg font-medium flex items-center gap-2">
                <span className="text-2xl">📊</span>
                Showing <span className="font-bold text-blue-600">{filteredCourses.length}</span> course{filteredCourses.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          {/* Enhanced Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <Card 
                key={course.id} 
                className="cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-500 border-0 shadow-xl group bg-white/80 backdrop-blur-sm hover:bg-white/90 animate-fade-in"
                onClick={() => setSelectedCourse(course)}
                style={{animationDelay: `${0.3 + index * 0.1}s`}}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                        {course.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
                        <span className="flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full">
                          <BookOpen className="h-4 w-4" />
                          {course.department}
                        </span>
                        <span className="flex items-center gap-1 bg-green-50 px-3 py-1 rounded-full">
                          <Clock className="h-4 w-4" />
                          Sem {course.semester}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 px-3 py-2 rounded-full">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-yellow-600">{course.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium rounded-full border border-blue-200">
                        {course.type}
                      </span>
                      <span className="text-sm font-semibold text-slate-700 bg-gray-50 px-3 py-1 rounded-full">
                        {course.credits} Credits
                      </span>
                    </div>
                    
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {course.description}
                    </p>
                    
                    <div className="pt-3 border-t border-slate-100">
                      <p className="text-sm text-slate-700 mb-2">
                        <span className="font-semibold">👨‍🏫 Professor:</span> {course.professor}
                      </p>
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <span>💬</span>
                        {course.reviews} reviews
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Empty State */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-16 animate-fade-in">
              <div className="bg-white/60 rounded-2xl p-12 backdrop-blur-sm border border-white/40 shadow-xl max-w-md mx-auto">
                <div className="text-6xl mb-6">📚</div>
                <BookOpen className="h-16 w-16 text-slate-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">No courses found</h3>
                <p className="text-slate-600 text-lg">Try adjusting your filters to discover more amazing courses!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
