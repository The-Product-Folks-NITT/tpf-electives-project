
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Star, Clock, BookOpen, Calendar, MessageSquare, Sparkles, GraduationCap } from "lucide-react";

interface CourseDetailsProps {
  course: any;
  onBack: () => void;
}

const CourseDetails = ({ course, onBack }: CourseDetailsProps) => {
  // Aggregated course data
  const courseMetrics = {
    professor: "Dr. Rajesh Kumar",
    attendanceStrictness: 3, // Average of all reviews
    teachingMethod: "Provides slides & Board teaching",
    paperType: "Few questions may repeat",
    assignments: "Moderate workload",
    examStructure: "2 CTs + Midsem",
    gradingPsycho: 3, // Average
    extraClasses: "Sometimes",
    averageRating: 4.7,
    totalReviews: 45,
    gradingPattern: "A: 30%, B: 42%, C: 25%, Others: 3%",
    difficulty: "Moderate"
  };

  const getStrictnessEmoji = (level: number) => {
    if (level <= 2) return "😎";
    if (level <= 3) return "😐";
    return "😤";
  };

  const getStrictnessText = (level: number) => {
    if (level <= 2) return "Chill";
    if (level <= 3) return "Moderate";
    return "Strict";
  };

  const getPsychoEmoji = (level: number) => {
    if (level <= 2) return "😇";
    if (level <= 3) return "🤔";
    return "😈";
  };

  const getPsychoText = (level: number) => {
    if (level <= 2) return "Fair";
    if (level <= 3) return "Standard";
    return "Tough";
  };

  const getExtraClassesEmoji = (classes: string) => {
    if (classes.toLowerCase().includes('chill') || classes.toLowerCase().includes('nah')) return "🏖️";
    if (classes.toLowerCase().includes('some')) return "📚";
    return "🔥";
  };

  const getDifficultyEmoji = (difficulty: string) => {
    switch(difficulty.toLowerCase()) {
      case 'easy': return "🟢";
      case 'moderate': return "🟡";
      case 'hard': return "🔴";
      default: return "⚪";
    }
  };

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
              Back to Courses
            </Button>
          </div>

          {/* Enhanced Course Header */}
          <Card className="mb-8 border-0 shadow-2xl bg-gradient-to-r from-white via-blue-50/50 to-purple-50/50 backdrop-blur-xl animate-fade-in">
            <CardHeader className="pb-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="h-10 w-10 text-blue-600" />
                    <Sparkles className="h-6 w-6 text-yellow-500 animate-pulse" />
                  </div>
                  <CardTitle className="text-4xl mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                    {course.title}
                  </CardTitle>
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 text-base font-semibold rounded-full border border-blue-200">
                      {course.type}
                    </Badge>
                    <div className="flex items-center gap-2 text-slate-600 bg-white/60 px-4 py-2 rounded-full">
                      <BookOpen className="h-5 w-5" />
                      <span className="font-medium">{course.department}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 bg-white/60 px-4 py-2 rounded-full">
                      <Calendar className="h-5 w-5" />
                      <span>Semester {course.semester}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 bg-white/60 px-4 py-2 rounded-full">
                      <Clock className="h-5 w-5" />
                      <span>{course.credits} Credits</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full">
                      <span className="text-2xl">{getDifficultyEmoji(courseMetrics.difficulty)}</span>
                      <span className="font-medium text-slate-700">{courseMetrics.difficulty}</span>
                    </div>
                  </div>
                  <p className="text-xl text-slate-700 mb-6 leading-relaxed bg-white/40 p-4 rounded-lg">
                    {course.description}
                  </p>
                </div>
                
                <div className="text-center lg:text-right bg-white/80 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-white/40">
                  <div className="flex items-center justify-center lg:justify-end gap-3 mb-3">
                    <Star className="h-10 w-10 fill-yellow-400 text-yellow-400 animate-pulse" />
                    <span className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                      {courseMetrics.averageRating}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xl font-medium">{courseMetrics.totalReviews} reviews</p>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Enhanced Course Metrics Dashboard */}
          <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-xl animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CardHeader className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-t-2xl">
              <CardTitle className="flex items-center gap-3 text-3xl">
                <MessageSquare className="h-8 w-8 text-blue-600" />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Course Insights Dashboard
                </span>
                <span className="text-3xl">📊</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {/* Professor Information */}
              <div className="mb-8 p-8 bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 rounded-2xl border-2 border-indigo-200 shadow-lg animate-scale-in">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">👨‍🏫</span>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-indigo-600 bg-clip-text text-transparent">
                    Professor Information
                  </h3>
                </div>
                <div className="bg-white/90 rounded-xl p-6 border-l-4 border-indigo-500 shadow-md">
                  <p className="text-2xl font-bold text-slate-800">{courseMetrics.professor}</p>
                </div>
              </div>

              {/* Main Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {/* Attendance Strictness */}
                <div className="bg-gradient-to-br from-white via-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{getStrictnessEmoji(courseMetrics.attendanceStrictness)}</span>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900">Attendance Strictness</h4>
                      <p className="text-sm text-slate-600">How strict is the prof?</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <Progress value={courseMetrics.attendanceStrictness * 20} className="flex-1 h-3" />
                    <span className="font-bold text-2xl text-red-600">
                      {courseMetrics.attendanceStrictness}/5
                    </span>
                  </div>
                  <p className="text-xl font-semibold text-slate-700 bg-white/60 px-4 py-2 rounded-lg">
                    {getStrictnessText(courseMetrics.attendanceStrictness)}
                  </p>
                </div>

                {/* Teaching Method */}
                <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.1s'}}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">📝</span>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900">Teaching Method</h4>
                      <p className="text-sm text-slate-600">Slides or board?</p>
                    </div>
                  </div>
                  <p className="text-xl font-semibold text-slate-700 bg-white/60 px-4 py-3 rounded-lg">
                    {courseMetrics.teachingMethod}
                  </p>
                </div>

                {/* Paper Pattern */}
                <div className="bg-gradient-to-br from-white via-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">📄</span>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900">Paper Pattern</h4>
                      <p className="text-sm text-slate-600">How's the paper?</p>
                    </div>
                  </div>
                  <p className="text-xl font-semibold text-slate-700 bg-white/60 px-4 py-3 rounded-lg">
                    {courseMetrics.paperType}
                  </p>
                </div>

                {/* Assignments */}
                <div className="bg-gradient-to-br from-white via-yellow-50 to-yellow-100 rounded-2xl p-8 border-2 border-yellow-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.3s'}}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">📚</span>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900">Assignments</h4>
                      <p className="text-sm text-slate-600">Workload level</p>
                    </div>
                  </div>
                  <p className="text-xl font-semibold text-slate-700 bg-white/60 px-4 py-3 rounded-lg">
                    {courseMetrics.assignments}
                  </p>
                </div>

                {/* Exam Structure */}
                <div className="bg-gradient-to-br from-white via-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">🎯</span>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900">Exam Structure</h4>
                      <p className="text-sm text-slate-600">Test pattern</p>
                    </div>
                  </div>
                  <p className="text-xl font-semibold text-slate-700 bg-white/60 px-4 py-3 rounded-lg">
                    {courseMetrics.examStructure}
                  </p>
                </div>

                {/* Grading Psychology */}
                <div className="bg-gradient-to-br from-white via-orange-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.5s'}}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{getPsychoEmoji(courseMetrics.gradingPsycho)}</span>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900">Grading Level</h4>
                      <p className="text-sm text-slate-600">Prof's grading style</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <Progress value={courseMetrics.gradingPsycho * 20} className="flex-1 h-3" />
                    <span className="font-bold text-2xl text-orange-600">
                      {courseMetrics.gradingPsycho}/5
                    </span>
                  </div>
                  <p className="text-xl font-semibold text-slate-700 bg-white/60 px-4 py-2 rounded-lg">
                    {getPsychoText(courseMetrics.gradingPsycho)}
                  </p>
                </div>
              </div>

              {/* Extra Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Extra Classes */}
                <div className="bg-gradient-to-r from-pink-50 via-rose-50 to-red-50 rounded-2xl p-8 border-2 border-pink-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{getExtraClassesEmoji(courseMetrics.extraClasses)}</span>
                    <div>
                      <h4 className="font-bold text-2xl text-slate-900">Extra Classes</h4>
                      <p className="text-sm text-slate-600">How often?</p>
                    </div>
                  </div>
                  <p className="text-2xl font-semibold text-slate-700 bg-white/60 px-6 py-3 rounded-lg">
                    {courseMetrics.extraClasses}
                  </p>
                </div>

                {/* Grading Pattern */}
                <div className="bg-gradient-to-r from-slate-50 via-gray-50 to-zinc-50 rounded-2xl p-8 border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.1s'}}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">📈</span>
                    <div>
                      <h4 className="font-bold text-2xl text-slate-900">Grading Pattern</h4>
                      <p className="text-sm text-slate-600">Grade distribution</p>
                    </div>
                  </div>
                  <p className="text-xl font-semibold text-slate-700 bg-white/60 px-6 py-3 rounded-lg">
                    {courseMetrics.gradingPattern}
                  </p>
                </div>
              </div>

              {/* Enhanced Summary Card */}
              <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-2xl p-10 border-3 border-blue-300 shadow-2xl animate-fade-in animate-glow">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">💡</span>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent">
                    Overall Summary
                  </h3>
                  <Sparkles className="h-8 w-8 text-yellow-500 animate-pulse" />
                </div>
                <div className="bg-white/70 rounded-xl p-6 backdrop-blur-sm">
                  <p className="text-xl text-slate-700 leading-relaxed">
                    This course has received an average rating of <span className="font-bold text-blue-600">{courseMetrics.averageRating}/5</span> from <span className="font-bold text-blue-600">{courseMetrics.totalReviews} students</span>. 
                    The professor maintains a <span className="font-bold text-orange-600">{getStrictnessText(courseMetrics.attendanceStrictness).toLowerCase()}</span> attendance policy and uses 
                    <span className="font-bold text-green-600"> {courseMetrics.teachingMethod.toLowerCase()}</span> for teaching. 
                    The grading is considered <span className="font-bold text-purple-600">{getPsychoText(courseMetrics.gradingPsycho).toLowerCase()}</span> with a 
                    <span className="font-bold text-indigo-600"> {courseMetrics.difficulty.toLowerCase()}</span> difficulty level overall.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
