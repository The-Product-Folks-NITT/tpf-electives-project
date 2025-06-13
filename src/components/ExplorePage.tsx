
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Filter, BookOpen, Clock, Star } from "lucide-react";
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
    description: "Introduction to machine learning algorithms and their applications"
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
    description: "Signal processing techniques for digital systems"
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
    description: "Data-driven decision making in business contexts"
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
    description: "Full-stack web development with modern frameworks"
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

  const departments = ["Computer Science", "Electronics", "Management", "Civil Engineering", "Mechanical Engineering"];
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold text-slate-900">Explore Courses</h1>
        </div>

        {/* Filters */}
        <Card className="mb-8 shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filter Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search courses..."
                  value={filters.search}
                  onChange={(e) => setFilters({...filters, search: e.target.value})}
                  className="pl-10"
                />
              </div>
              
              <Select value={filters.semester} onValueChange={(value) => setFilters({...filters, semester: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Semesters</SelectItem>
                  {semesters.map(sem => (
                    <SelectItem key={sem} value={sem.toString()}>Semester {sem}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filters.department} onValueChange={(value) => setFilters({...filters, department: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {departments.map(dept => (
                    <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filters.type} onValueChange={(value) => setFilters({...filters, type: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Course Type" />
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
                className="w-full"
              >
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <p className="text-slate-600">
            Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <Card 
              key={course.id} 
              className="cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg group"
              onClick={() => setSelectedCourse(course)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {course.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Sem {course.semester}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {course.type}
                    </span>
                    <span className="text-sm text-slate-600">{course.credits} Credits</span>
                  </div>
                  
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {course.description}
                  </p>
                  
                  <div className="pt-2 border-t">
                    <p className="text-sm text-slate-600">
                      <span className="font-medium">Professor:</span> {course.professor}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {course.reviews} reviews
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No courses found</h3>
            <p className="text-slate-600">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
