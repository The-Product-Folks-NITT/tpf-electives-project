
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Star, Clock, BookOpen, User, Calendar, MessageSquare, TrendingUp, AlertTriangle, FileText, Users, Brain, BookMarked, Zap } from "lucide-react";

interface CourseDetailsProps {
  course: any;
  onBack: () => void;
}

const CourseDetails = ({ course, onBack }: CourseDetailsProps) => {
  const mockReviews = [
    {
      id: 1,
      student: "Anonymous Student",
      rating: 5,
      semester: "Fall 2023",
      comment: "Excellent course! The professor explains concepts very clearly and the assignments are practical. Highly recommend for anyone interested in the field.",
      gradingPattern: "A: 30%, B: 40%, C: 25%, Others: 5%",
      difficulty: "Moderate",
      professorName: "Dr. Rajesh Kumar",
      attendanceStrictness: 2,
      teachingMethod: "Provides slides",
      paperType: "Few questions may repeat",
      assignments: "Standard assignments, manageable workload",
      examStructure: "2 CTs + Midsem",
      gradingPsycho: 3,
      extraClasses: "Yeah some"
    },
    {
      id: 2,
      student: "Anonymous Student",
      rating: 4,
      semester: "Spring 2023",
      comment: "Good course content but can be challenging. Make sure to attend all lectures and complete assignments on time.",
      gradingPattern: "A: 25%, B: 45%, C: 30%",
      difficulty: "Hard",
      professorName: "Dr. Rajesh Kumar",
      attendanceStrictness: 4,
      teachingMethod: "Board teaching",
      paperType: "Won't repeat, waste of time to go through prev papers",
      assignments: "Heavy assignments but learning-oriented",
      examStructure: "Midsems only",
      gradingPsycho: 4,
      extraClasses: "A lot"
    },
    {
      id: 3,
      student: "Anonymous Student",
      rating: 5,
      semester: "Fall 2022",
      comment: "One of the best electives I've taken. Very relevant to current industry trends and the professor is very supportive.",
      gradingPattern: "A: 35%, B: 40%, C: 20%, Others: 5%",
      difficulty: "Easy",
      professorName: "Dr. Rajesh Kumar",
      attendanceStrictness: 1,
      teachingMethod: "Provides slides",
      paperType: "Repeatable",
      assignments: "Light assignments, easy to manage",
      examStructure: "2 CTs + Midsem",
      gradingPsycho: 2,
      extraClasses: "Nah, it's very chill"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'moderate': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStrictnessColor = (level: number) => {
    if (level <= 2) return 'text-green-600';
    if (level <= 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getPsychoColor = (level: number) => {
    if (level <= 2) return 'text-green-600';
    if (level <= 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getTeachingMethodIcon = (method: string) => {
    return method.includes('slides') ? <FileText className="h-4 w-4" /> : <BookMarked className="h-4 w-4" />;
  };

  const getExtraClassesColor = (classes: string) => {
    if (classes.includes('chill')) return 'text-green-600';
    if (classes.includes('some')) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="flex items-center gap-2 hover:bg-white/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Courses
          </Button>
        </div>

        {/* Course Header */}
        <Card className="mb-8 border-0 shadow-xl bg-gradient-to-r from-white to-blue-50/50">
          <CardHeader className="pb-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <CardTitle className="text-4xl mb-6 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                  {course.title}
                </CardTitle>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm">{course.type}</Badge>
                  <div className="flex items-center gap-2 text-slate-600">
                    <BookOpen className="h-5 w-5" />
                    <span className="font-medium">{course.department}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="h-5 w-5" />
                    <span>Semester {course.semester}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="h-5 w-5" />
                    <span>{course.credits} Credits</span>
                  </div>
                </div>
                <p className="text-xl text-slate-700 mb-6 leading-relaxed">{course.description}</p>
                <div className="flex items-center gap-3 bg-white/60 rounded-lg p-4">
                  <User className="h-5 w-5 text-blue-600" />
                  <span className="text-lg font-semibold text-slate-800">Professor: {course.professor}</span>
                </div>
              </div>
              
              <div className="text-center lg:text-right bg-white/60 rounded-lg p-6">
                <div className="flex items-center justify-center lg:justify-end gap-3 mb-3">
                  <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                  <span className="text-3xl font-bold text-slate-800">{course.rating}</span>
                </div>
                <p className="text-slate-600 text-lg">{course.reviews} reviews</p>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Reviews Section */}
        <Card className="border-0 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <MessageSquare className="h-6 w-6 text-blue-600" />
              Student Reviews & Course Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-8">
              {mockReviews.map(review => (
                <div key={review.id} className="border border-slate-200 rounded-xl p-6 bg-gradient-to-br from-white to-slate-50/50 shadow-lg">
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full p-3">
                        <User className="h-5 w-5 text-blue-700" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-lg">{review.student}</p>
                        <p className="text-slate-600">{review.semester}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${
                              i < review.rating 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-slate-300'
                            }`} 
                          />
                        ))}
                      </div>
                      <Badge className={getDifficultyColor(review.difficulty)}>
                        {review.difficulty}
                      </Badge>
                    </div>
                  </div>

                  {/* Review Comment */}
                  <div className="mb-6 p-4 bg-white/80 rounded-lg border-l-4 border-blue-400">
                    <p className="text-slate-700 text-lg leading-relaxed italic">"{review.comment}"</p>
                  </div>

                  {/* Detailed Information Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {/* Professor Details */}
                    <div className="bg-white/90 rounded-lg p-4 border border-slate-200">
                      <div className="flex items-center gap-2 mb-3">
                        <User className="h-5 w-5 text-slate-600" />
                        <span className="font-semibold text-slate-900">Professor</span>
                      </div>
                      <p className="text-slate-700 font-medium">{review.professorName}</p>
                    </div>

                    {/* Attendance Strictness */}
                    <div className="bg-white/90 rounded-lg p-4 border border-slate-200">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className="h-5 w-5 text-slate-600" />
                        <span className="font-semibold text-slate-900">Attendance Strictness</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Progress value={review.attendanceStrictness * 20} className="flex-1" />
                        <span className={`font-bold text-lg ${getStrictnessColor(review.attendanceStrictness)}`}>
                          {review.attendanceStrictness}/5
                        </span>
                      </div>
                    </div>

                    {/* Teaching Method */}
                    <div className="bg-white/90 rounded-lg p-4 border border-slate-200">
                      <div className="flex items-center gap-2 mb-3">
                        {getTeachingMethodIcon(review.teachingMethod)}
                        <span className="font-semibold text-slate-900">Teaching Method</span>
                      </div>
                      <p className="text-slate-700">{review.teachingMethod}</p>
                    </div>

                    {/* Paper Pattern */}
                    <div className="bg-white/90 rounded-lg p-4 border border-slate-200">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="h-5 w-5 text-slate-600" />
                        <span className="font-semibold text-slate-900">Paper Pattern</span>
                      </div>
                      <p className="text-slate-700">{review.paperType}</p>
                    </div>

                    {/* Exam Structure */}
                    <div className="bg-white/90 rounded-lg p-4 border border-slate-200">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="h-5 w-5 text-slate-600" />
                        <span className="font-semibold text-slate-900">Exam Structure</span>
                      </div>
                      <p className="text-slate-700">{review.examStructure}</p>
                    </div>

                    {/* Grading Psycho Level */}
                    <div className="bg-white/90 rounded-lg p-4 border border-slate-200">
                      <div className="flex items-center gap-2 mb-3">
                        <Brain className="h-5 w-5 text-slate-600" />
                        <span className="font-semibold text-slate-900">Grading Level</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Progress value={review.gradingPsycho * 20} className="flex-1" />
                        <span className={`font-bold text-lg ${getPsychoColor(review.gradingPsycho)}`}>
                          {review.gradingPsycho}/5
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Assignments */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                      <div className="flex items-center gap-2 mb-3">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold text-slate-900">Assignments</span>
                      </div>
                      <p className="text-slate-700">{review.assignments}</p>
                    </div>

                    {/* Extra Classes */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="h-5 w-5 text-purple-600" />
                        <span className="font-semibold text-slate-900">Extra Classes</span>
                      </div>
                      <p className={`font-medium ${getExtraClassesColor(review.extraClasses)}`}>
                        {review.extraClasses}
                      </p>
                    </div>
                  </div>

                  {/* Grading Pattern */}
                  <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-6 border border-slate-200">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="h-5 w-5 text-slate-600" />
                      <span className="font-semibold text-slate-900 text-lg">Grading Pattern</span>
                    </div>
                    <p className="text-slate-700 font-medium text-lg">{review.gradingPattern}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CourseDetails;
