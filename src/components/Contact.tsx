"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Link,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import {
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  // const form = useRef();
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_lkvzh6c",
        "template_lojobzj",
        form.current,
        "R1XZ0RawOJfYEYS0e"
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset(); // ✅ Reset form
          setLoading(false); // Stop loading
        },
        (error) => {
          console.error("Email sending error:", error.text);
          setSuccess(false);
          setLoading(false); // Stop loading
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact Information
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-blue-200 leading-relaxed mb-8">
                Ready to take your web application to the next level? As a MERN
                Stack Developer, I'm here to build fast, scalable, and
                user-friendly solutions. From maintaining clean code and
                seamless integration to optimizing performance and ensuring best
                practices, I help turn your ideas into powerful digital
                experiences.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-blue-200">+353838485737</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-blue-200">aziruddin83@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-blue-200">Dublin, Ireland</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <a href="https://www.linkedin.com/in/azir9200" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                >
                  <FaLinkedinIn className="w-10 h-10" />
                </Button>
              </a>
              <a href="https://github.com/azir9200" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                >
                  <FaGithub className="w-12 h-12" />
                </Button>
              </a>

              <a href="https://www.facebook.com/azirzaif/about" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                >
                  <FaFacebookF className="w-5 h-5" />
                </Button>
              </a>

              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-400 text-blue-400 text-2xl hover:bg-blue-400 hover:text-white"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Contact Form with EmailJS */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-200">
                      First Name
                    </label>
                    <Input
                      name="first_name"
                      placeholder="Your first name"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-200">
                      Last Name
                    </label>
                    <Input
                      name="last_name"
                      placeholder="Your last name"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400"
                    />
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <label className="text-sm font-medium text-blue-200">
                    Email Address
                  </label>
                  <Input
                    name="user_email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400"
                  />
                </div>

                <div className="space-y-2 mt-4">
                  <label className="text-sm font-medium text-blue-200">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your bookkeeping needs..."
                    rows={5}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center space-x-2">
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      <span className="ml-2">Sending...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {success && (
                  <p className="text-green-400 text-sm mt-4">
                    ✅ Message sent successfully!
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-blue-200">
            © 2024 | "Experienced Frontend Developer & Your Trusted Web
            Development Partner"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
