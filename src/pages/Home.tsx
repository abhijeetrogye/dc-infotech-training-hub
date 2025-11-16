import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { courses } from "@/data/courses";
import TestimonialSlider from "@/components/TestimonialSlider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import * as Icons from "lucide-react";
import { CheckCircle, Users, Award, TrendingUp, Target } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-90"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl text-white animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Future with DC Infotech
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Industry-leading training programs designed to launch your tech career
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-lg">
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg border-white text-white hover:bg-white hover:text-primary">
                <Link to="/enroll">Start Your Journey</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Students Trained", value: "5,000+" },
              { icon: Award, label: "Success Rate", value: "95%" },
              { icon: TrendingUp, label: "Placement Rate", value: "85%" },
              { icon: Target, label: "Partner Companies", value: "200+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Domains */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Training Domains</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of industry-relevant programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => {
              const IconComponent = (Icons as any)[course.icon];
              return (
                <Card key={course.id} className="card-hover cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}
                      <CardTitle className="text-xl">{course.name}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-4 text-sm">
                        <span className="font-semibold text-primary">1 Month</span>
                        <span className="text-muted-foreground">|</span>
                        <span className="font-semibold text-primary">3 Months</span>
                      </div>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/course/${course.id}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose DC Infotech?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need for a successful tech career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Industry-Expert Trainers",
                description: "Learn from professionals with 10+ years of real-world experience"
              },
              {
                title: "Real-Time Projects",
                description: "Build portfolio-worthy projects that showcase your skills"
              },
              {
                title: "Industry Certification",
                description: "Get recognized certifications valued by top companies"
              },
              {
                title: "Internship Opportunities",
                description: "Gain hands-on experience through our partner network"
              },
              {
                title: "1-on-1 Mentorship",
                description: "Personalized guidance throughout your learning journey"
              },
              {
                title: "100% Placement Support",
                description: "Dedicated assistance until you land your dream job"
              }
            ].map((feature, index) => (
              <div key={index} className="flex gap-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from graduates who've transformed their careers with us
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of successful graduates and transform your career today
          </p>
          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
            <Link to="/enroll">Enroll Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
