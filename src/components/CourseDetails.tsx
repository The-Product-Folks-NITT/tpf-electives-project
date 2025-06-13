
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, Clock, BookOpen, User, Calendar, MessageSquare, TrendingUp } from "lucide-react";

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
      difficulty: "Moderate"
    },
    {
      id: 2,
      student: "Anonymous Student",
      rating: 4,
      semester: "Spring 2023",
      comment: "Good course content but can be challenging. Make sure to attend all lectures and complete assignments on time.",
      gradingPattern: "A: 25%, B: 45%, C: 30%",
      difficulty: "Hard"
    },
    {
      id: 3,
      student: "Anonymous Student",
      rating: 5,
      semester: "Fall 2022",
      comment: "One of the best electives I've taken. Very relevant to current industry trends and the professor is very supportive.",
      gradingPattern: "A: 35%, B: 40%, C: 20%, Others: 5%",
      difficulty: "Easy"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Courses
          </Button>
        </div>

        {/* Course Header */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <CardTitle className="text-3xl mb-4">{course.title}</CardTitle>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <Badge className="bg-blue-100 text-blue-800">{course.type}</Badge>
                  <div className="flex items-center gap-2 text-slate-600">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.department}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="h-4 w-4" />
                    <span>Semester {course.semester}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="h-4 w-4" />
                    <span>{course.credits} Credits</span>
                  </div>
                </div>
                <p className="text-lg text-slate-700 mb-4">{course.description}</p>
                <div className="flex items-center gap-2 text-slate-600">
                  <User className="h-4 w-4" />
                  <span className="font-medium">Professor: {course.professor}</span>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="flex items-center justify-center lg:justify-end gap-2 mb-2">
                  <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  <span className="text-2xl font-bold">{course.rating}</span>
                </div>
                <p className="text-slate-600">{course.reviews} reviews</p>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Reviews Section */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Student Reviews & Grading Patterns
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {mockReviews.map(review => (
                <div key={review.id} className="border-b border-slate-200 last:border-b-0 pb-6 last:pb-0">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-slate-100 rounded-full p-2">
                        <User className="h-4 w-4 text-slate-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{review.student}</p>
                        <p className="text-sm text-slate-600">{review.semester}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${
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
                  
                  <p className="text-slate-700 mb-4">{review.comment}</p>
                  
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-slate-600" />
                      <span className="font-medium text-slate-900">Grading Pattern</span>
                    </div>
                    <p className="text-sm text-slate-600">{review.gradingPattern}</p>
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
