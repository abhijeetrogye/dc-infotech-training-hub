import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About DC Infotech</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Empowering future tech leaders through world-class training programs
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At DC Infotech Private Limited, we believe that quality education should be accessible to everyone. 
              Our mission is to bridge the gap between academic learning and industry requirements by providing 
              practical, hands-on training that prepares students for real-world challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Vision",
                description: "To be the leading tech training institute shaping the future of IT professionals"
              },
              {
                icon: Users,
                title: "Community",
                description: "Building a strong network of 5,000+ successful graduates across industries"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Maintaining 95% success rate through quality training and support"
              },
              {
                icon: TrendingUp,
                title: "Growth",
                description: "Continuous curriculum updates aligned with latest industry trends"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center card-hover">
                <CardContent className="pt-8">
                  <item.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Created Training Programs */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Why We Created These Programs</h2>
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                Founded in 2015, DC Infotech Private Limited started with a simple observation: 
                there was a significant gap between what students learned in traditional education 
                and what the industry actually needed.
              </p>
              <p>
                Our founders, seasoned IT professionals with over 15 years of combined experience, 
                recognized that fresh graduates often struggled to secure jobs despite having degrees. 
                The missing piece was practical, hands-on experience with current technologies and 
                industry best practices.
              </p>
              <p>
                We created our training programs to solve this exact problem. Each course is designed 
                by industry experts and updated regularly to reflect the latest trends and technologies. 
                Our students don't just learn theory—they build real projects, solve actual problems, 
                and graduate with the confidence and skills to excel from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Expert Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Dr. Rajesh Kumar",
                role: "Director & Lead Instructor",
                image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=0077ff&color=fff&size=200",
                expertise: "Full Stack Development, AI/ML"
              },
              {
                name: "Priya Sharma",
                role: "Senior DevOps Trainer",
                image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=0077ff&color=fff&size=200",
                expertise: "Cloud Computing, DevOps"
              },
              {
                name: "Amit Verma",
                role: "Data Science Lead",
                image: "https://ui-avatars.com/api/?name=Amit+Verma&background=0077ff&color=fff&size=200",
                expertise: "Data Analytics, Machine Learning"
              }
            ].map((instructor, index) => (
              <Card key={index} className="text-center card-hover">
                <CardContent className="pt-8">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold mb-1">{instructor.name}</h3>
                  <p className="text-primary font-semibold mb-2">{instructor.role}</p>
                  <p className="text-sm text-muted-foreground">{instructor.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Visit Our Campus</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2667937623994!2d77.04381931508084!3d28.496048382464473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c5b8c5d5c5%3A0x5f5f5f5f5f5f5f5f!2sSector%2018%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DC Infotech Location"
                  className="rounded-lg"
                ></iframe>
              </CardContent>
            </Card>
            <div className="text-center mt-8 text-lg text-foreground">
              <p className="font-semibold">DC Infotech Private Limited</p>
              <p className="text-muted-foreground">Tech Park, Sector 18, Gurugram, Haryana 122001</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
