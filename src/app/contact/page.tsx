"use client";
import Image from "next/image";
import footer from "@/public/footer.svg";
import { useState } from "react";
import { createContact } from "@/api/createContact";
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
    <div className="flex flex-col  ">
      <div className="flex flex-col mt-10 md:mt-40  justify-between w-full">
        <div className="text-secondary text-5xl font-bold text-center mb-4">
          Get in Touch
        </div>
        <div className="flex-grow flex items-center justify-center">
          <div className="p-6 w-full max-w-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <Button isPrimary>Send</Button>
            </form>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src={footer}
          width={500}
          height={100}
          alt="Footer"
          className="object-contain w-full"
        />
      </div>
    </div>
  );
}
