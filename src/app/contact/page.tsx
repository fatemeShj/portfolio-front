"use client";
import { useState, useEffect } from "react";
import { createContact } from "@/api/createContact";
import Image from "next/image";
import contactImage from "@/assets/images/contact.svg";
import Button from "@/components/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (submitStatus) {
      timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [submitStatus]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await createContact(
        formData.name,
        formData.email,
        formData.message
      );

      console.log("response=>", response);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-1 lg:order-1">
          <div className="justify-center items-center text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Got a project in <span className="text-secondary">mind?</span>
            </h1>
            <p className="mt-4 text-lg max-w-lg">
              {`Fill out the form and I'll get back to you as soon as possible.`}
            </p>
          </div>

          <div className="mt-8 md:mt-12 flex justify-center lg:justify-start">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
              <Image
                src={contactImage}
                alt="Contact illustration"
                width={500}
                height={500}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="order-2 lg:order-2">
          <div className="p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-customGray outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-customGray outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-customGray outline-none"
                />
              </div>

              <div className="pt-2">
                <Button isPrimary className="w-full py-3 px-6 text-lg">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>

              {submitStatus === "success" && (
                <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-lg text-center animate-fade">
                  {`Message sent successfully! I'll get back to you soon.`}
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg text-center animate-fade">
                  Failed to send message. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
