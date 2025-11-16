import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { courses } from "@/data/courses";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone must be 10 digits"),
  course: z.string().min(1, "Please select a course"),
  duration: z.enum(["1-month", "3-months"], {
    required_error: "Please select a duration",
  }),
  resume: z.any().optional(),
});

type FormData = z.infer<typeof formSchema>;

const Enroll = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      course: "",
      duration: undefined,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    toast({
      title: "Enrollment Successful!",
      description: "We'll contact you shortly with next steps.",
    });
    form.reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Enroll Now</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Take the first step towards your dream tech career
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <Card className="border-2 border-primary">
                <CardContent className="pt-12 pb-12 text-center">
                  <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Successfully Registered!</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Thank you for enrolling with DC Infotech. Our team will contact you within 24 hours
                    to confirm your enrollment and share further details.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>
                    Submit Another Application
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Enrollment Form</CardTitle>
                  <CardDescription className="text-base">
                    Fill in your details below to start your learning journey with us
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Full Name */}
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Email */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Phone */}
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="9876543210" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Course Selection */}
                      <FormField
                        control={form.control}
                        name="course"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Select Course *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Choose a training program" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {courses.map((course) => (
                                  <SelectItem key={course.id} value={course.id}>
                                    {course.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Duration */}
                      <FormField
                        control={form.control}
                        name="duration"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Training Duration *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select duration" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1-month">1 Month Program</SelectItem>
                                <SelectItem value="3-months">3 Months Program (Recommended)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Resume Upload (Optional) */}
                      <FormField
                        control={form.control}
                        name="resume"
                        render={({ field: { value, onChange, ...field } }) => (
                          <FormItem>
                            <FormLabel>Resume (Optional)</FormLabel>
                            <FormControl>
                              <Input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => onChange(e.target.files)}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" size="lg" className="w-full">
                        Submit Enrollment
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            )}

            {/* Benefits */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-muted">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">What Happens Next?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Our team reviews your application</li>
                    <li>✓ You receive a confirmation call within 24 hours</li>
                    <li>✓ Get access to course materials</li>
                    <li>✓ Start your learning journey!</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-muted">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>📧 info@dcinfotech.com</li>
                    <li>📞 +91 98765 43210</li>
                    <li>⏰ Mon-Sat: 9 AM - 6 PM</li>
                    <li>📍 Gurugram, Haryana</li>
                  </ul>
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

export default Enroll;
