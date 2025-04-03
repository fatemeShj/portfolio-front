"use client";
import { useState } from "react";
import { createContact } from "@/api/createContact";
import Image from "next/image";
import contactImage from "@/public/contact.svg";
import Button from "@/components/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    const response = await createContact(
      formData.name,
      formData.email,
      formData.message
    );
    console.log("response=>", response);
  };
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-10 md:mt-40">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold">
          Got a project in <span className="text-secondary">mind?</span>
        </h1>
        <div className="mt-8 flex justify-center md:justify-start">
          <Image src={contactImage} alt="contact" width={300} height={300} />
        </div>
      </div>
      <div className="p-6 w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-bold mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl outline-none bg-customGray"
            />
          </div>
          <div>
            <label className="block font-bold mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl outline-none bg-customGray"
            />
          </div>
          <div>
            <label className="block font-bold mb-2">Your Message</label>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-4 rounded-xl outline-none bg-customGray"
            />
          </div>
          <Button isPrimary>Send Message</Button>
        </form>
      </div>
    </div>
  );
}
