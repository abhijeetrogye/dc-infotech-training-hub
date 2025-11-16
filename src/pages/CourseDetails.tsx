import { useParams, Link, useNavigate } from "react-router-dom";
import { courses } from "@/data/courses";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as Icons from "lucide-react";
import { CheckCircle, Clock, Briefcase, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <Button asChild>
            <Link to="/courses">Back to Courses</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = (Icons as any)[course.icon];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            {IconComponent && <IconComponent className="h-16 w-16" />}
            <div>
              <h1 className="text-5xl font-bold mb-2">{course.name}</h1>
              <p className="text-xl text-white/90">{course.description}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/enroll">Enroll Now</Link>
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate(-1)} className="border-white text-white hover:bg-white hover:text-primary">
              Back to Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Program Structure */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    Program Structure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {course.modules.map((module, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{module}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Tools & Technologies */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Tools & Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {course.tools.map((tool, index) => (
                      <Badge key={index} variant="secondary" className="text-sm px-4 py-2">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Live Project */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Briefcase className="h-6 w-6 text-primary" />
                    Live Project
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground text-lg">{course.liveProject}</p>
                  <p className="text-muted-foreground mt-2">
                    Build a complete real-world application to add to your portfolio
                  </p>
                </CardContent>
              </Card>

              {/* Career Paths */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Award className="h-6 w-6 text-primary" />
                    Career Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.careerPaths.map((path, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-foreground">{path}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Duration Comparison */}
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Clock className="h-6 w-6 text-primary" />
                    Training Options
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* 1 Month */}
                  <div className="p-4 border-2 border-border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold">1 Month Program</h3>
                      <Badge variant="secondary">Fast Track</Badge>
                    </div>
                    <p className="text-3xl font-bold text-primary mb-3">{course.oneMonthFee}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                      <li>✓ Core concepts & fundamentals</li>
                      <li>✓ Essential tools & practices</li>
                      <li>✓ Basic project</li>
                      <li>✓ Certification</li>
                    </ul>
                    <Button asChild className="w-full">
                      <Link to="/enroll">Enroll - 1 Month</Link>
                    </Button>
                  </div>

                  <Separator />

                  {/* 3 Months */}
                  <div className="p-4 border-2 border-primary rounded-lg bg-primary/5">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold">3 Month Program</h3>
                      <Badge>Recommended</Badge>
                    </div>
                    <p className="text-3xl font-bold text-primary mb-3">{course.threeMonthFee}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                      <li>✓ Complete curriculum coverage</li>
                      <li>✓ Advanced topics & best practices</li>
                      <li>✓ Multiple live projects</li>
                      <li>✓ Industry certification</li>
                      <li>✓ Internship recommendation</li>
                      <li>✓ 100% placement support</li>
                      <li>✓ 1-on-1 mentorship</li>
                    </ul>
                    <Button asChild className="w-full">
                      <Link to="/enroll">Enroll - 3 Months</Link>
                    </Button>
                  </div>

                  {/* Features */}
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-bold mb-3">All Programs Include:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span>Expert trainers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span>Hands-on learning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span>Course materials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span>Lifetime access</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetails;
