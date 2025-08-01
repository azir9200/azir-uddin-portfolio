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
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    if (!form.current) {
      setError("Form not found.");
      setLoading(false);
      return;
    }

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
          setShowMessage(true);
          form.current?.reset();
          setLoading(false);
          setTimeout(() => {
            setShowMessage(false);
          }, 5000);
        },
        (error) => {
          console.error("Email sending error:", error.text);
          setError("❌ Failed to send. Please try again later.");
          setLoading(false);
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
                Looking for a proactive, fast-learning, and reliable MERN Stack
                Developer ? I am experienced with building user-friendly,
                scalable applications and love solving real-world problems with
                clean, modern code.
                <br />
                <br />
                Feel free to message me—whether you have a job opening, a
                freelance project, or want to collaborate!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-blue-200">+351 920319177</p>
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
                  <p className="text-blue-200">Porto, Portugal</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.linkedin.com/in/azir9200"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                >
                  <FaLinkedinIn className="w-6 h-6" />
                </Button>
              </a>

              <a
                href="https://github.com/azir9200"
                target="_blank"
                aria-label="GitHub"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                >
                  <FaGithub className="w-6 h-6" />
                </Button>
              </a>

              <a
                href="https://www.facebook.com/azirzaif/about"
                target="_blank"
                aria-label="Facebook"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                >
                  <FaFacebookF className="w-6 h-6" />
                </Button>
              </a>
            </div>

            {/* <div className="flex space-x-4 pt-4">
              <a
                href="https://www.linkedin.com/in/azir9200"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                >
                  <FaLinkedinIn className="w-10 h-10" />
                </Button>
              </a>
              <a
                href="https://github.com/azir9200"
                target="_blank"
                aria-label="GitHub"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                >
                  <FaGithub className="w-12 h-12" />
                </Button>
              </a>

              <a
                href="https://www.facebook.com/azirzaif/about"
                target="_blank"
                aria-label="Facebook"
              >
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
            </div> */}
          </div>

          {/* Contact Form with EmailJS */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Send Message
              </CardTitle>
            </CardHeader>
            {/* <CardContent className="space-y-6">
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
            </CardContent> */}
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
                    placeholder="Tell me how I can help you..."
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

                {showMessage && success && (
                  <p className="text-green-400 text-sm mt-4">
                    ✅ Message sent successfully!
                  </p>
                )}

                {error && <p className="text-red-400 text-sm mt-4">{error}</p>}
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
