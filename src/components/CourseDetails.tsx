
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
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{getDifficultyEmoji(courseMetrics.difficulty)}</span>
                    <span className="font-medium text-slate-700">{courseMetrics.difficulty}</span>
                  </div>
                </div>
                <p className="text-xl text-slate-700 mb-6 leading-relaxed">{course.description}</p>
              </div>
              
              <div className="text-center lg:text-right bg-white/60 rounded-lg p-6">
                <div className="flex items-center justify-center lg:justify-end gap-3 mb-3">
                  <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                  <span className="text-3xl font-bold text-slate-800">{courseMetrics.averageRating}</span>
                </div>
                <p className="text-slate-600 text-lg">{courseMetrics.totalReviews} reviews</p>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Course Metrics Dashboard */}
        <Card className="border-0 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <MessageSquare className="h-6 w-6 text-blue-600" />
              Course Insights Dashboard 📊
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {/* Professor Information */}
            <div className="mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">👨‍🏫</span>
                <h3 className="text-2xl font-bold text-slate-900">Professor Information</h3>
              </div>
              <div className="bg-white/80 rounded-lg p-4 border-l-4 border-indigo-400">
                <p className="text-xl font-semibold text-slate-800">{courseMetrics.professor}</p>
              </div>
            </div>

            {/* Main Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Attendance Strictness */}
              <div className="bg-gradient-to-br from-white to-red-50 rounded-xl p-6 border border-red-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{getStrictnessEmoji(courseMetrics.attendanceStrictness)}</span>
                  <div>
                    <h4 className="font-bold text-slate-900">Attendance Strictness</h4>
                    <p className="text-sm text-slate-600">How strict is the prof?</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Progress value={courseMetrics.attendanceStrictness * 20} className="flex-1" />
                  <span className="font-bold text-xl text-red-600">
                    {courseMetrics.attendanceStrictness}/5
                  </span>
                </div>
                <p className="text-lg font-medium text-slate-700">{getStrictnessText(courseMetrics.attendanceStrictness)}</p>
              </div>

              {/* Teaching Method */}
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 border border-blue-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📝</span>
                  <div>
                    <h4 className="font-bold text-slate-900">Teaching Method</h4>
                    <p className="text-sm text-slate-600">Slides or board?</p>
                  </div>
                </div>
                <p className="text-lg font-medium text-slate-700">{courseMetrics.teachingMethod}</p>
              </div>

              {/* Paper Pattern */}
              <div className="bg-gradient-to-br from-white to-green-50 rounded-xl p-6 border border-green-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📄</span>
                  <div>
                    <h4 className="font-bold text-slate-900">Paper Pattern</h4>
                    <p className="text-sm text-slate-600">How's the paper?</p>
                  </div>
                </div>
                <p className="text-lg font-medium text-slate-700">{courseMetrics.paperType}</p>
              </div>

              {/* Assignments */}
              <div className="bg-gradient-to-br from-white to-yellow-50 rounded-xl p-6 border border-yellow-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📚</span>
                  <div>
                    <h4 className="font-bold text-slate-900">Assignments</h4>
                    <p className="text-sm text-slate-600">Workload level</p>
                  </div>
                </div>
                <p className="text-lg font-medium text-slate-700">{courseMetrics.assignments}</p>
              </div>

              {/* Exam Structure */}
              <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-6 border border-purple-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🎯</span>
                  <div>
                    <h4 className="font-bold text-slate-900">Exam Structure</h4>
                    <p className="text-sm text-slate-600">Test pattern</p>
                  </div>
                </div>
                <p className="text-lg font-medium text-slate-700">{courseMetrics.examStructure}</p>
              </div>

              {/* Grading Psychology */}
              <div className="bg-gradient-to-br from-white to-orange-50 rounded-xl p-6 border border-orange-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{getPsychoEmoji(courseMetrics.gradingPsycho)}</span>
                  <div>
                    <h4 className="font-bold text-slate-900">Grading Level</h4>
                    <p className="text-sm text-slate-600">Prof's grading style</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Progress value={courseMetrics.gradingPsycho * 20} className="flex-1" />
                  <span className="font-bold text-xl text-orange-600">
                    {courseMetrics.gradingPsycho}/5
                  </span>
                </div>
                <p className="text-lg font-medium text-slate-700">{getPsychoText(courseMetrics.gradingPsycho)}</p>
              </div>
            </div>

            {/* Extra Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Extra Classes */}
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{getExtraClassesEmoji(courseMetrics.extraClasses)}</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl">Extra Classes</h4>
                    <p className="text-sm text-slate-600">How often?</p>
                  </div>
                </div>
                <p className="text-xl font-medium text-slate-700">{courseMetrics.extraClasses}</p>
              </div>

              {/* Grading Pattern */}
              <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-6 border border-slate-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📈</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl">Grading Pattern</h4>
                    <p className="text-sm text-slate-600">Grade distribution</p>
                  </div>
                </div>
                <p className="text-xl font-medium text-slate-700">{courseMetrics.gradingPattern}</p>
              </div>
            </div>

            {/* Summary Card */}
            <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-xl p-8 border-2 border-blue-300 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💡</span>
                <h3 className="text-2xl font-bold text-slate-900">Overall Summary</h3>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                This course has received an average rating of <strong>{courseMetrics.averageRating}/5</strong> from <strong>{courseMetrics.totalReviews} students</strong>. 
                The professor maintains a <strong>{getStrictnessText(courseMetrics.attendanceStrictness).toLowerCase()}</strong> attendance policy and uses 
                <strong> {courseMetrics.teachingMethod.toLowerCase()}</strong> for teaching. 
                The grading is considered <strong>{getPsychoText(courseMetrics.gradingPsycho).toLowerCase()}</strong> with a 
                <strong> {courseMetrics.difficulty.toLowerCase()}</strong> difficulty level overall.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CourseDetails;
