import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import * as Icons from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Courses = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Training Programs</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of courses designed to make you industry-ready
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const IconComponent = (Icons as any)[course.icon];
              return (
                <Card 
                  key={course.id} 
                  className="card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      {IconComponent && (
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                      )}
                      <CardTitle className="text-2xl">{course.name}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Duration Options */}
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-sm">
                          1 Month: {course.oneMonthFee}
                        </Badge>
                        <Badge variant="outline" className="text-sm">
                          3 Months: {course.threeMonthFee}
                        </Badge>
                      </div>

                      {/* Tools Preview */}
                      <div className="flex flex-wrap gap-2">
                        {course.tools.slice(0, 4).map((tool, idx) => (
                          <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                            {tool}
                          </span>
                        ))}
                        {course.tools.length > 4 && (
                          <span className="text-xs bg-muted px-2 py-1 rounded">
                            +{course.tools.length - 4} more
                          </span>
                        )}
                      </div>

                      <Button asChild className="w-full">
                        <Link to={`/course/${course.id}`}>View Full Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
