import React, { useState } from "react";

const initialValue = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialValue);

  const formHandler = (e) => {
    e.preventDefault();
    setForm(initialValue);
  };

  return (
      <div
          name="contact"
          className="w-full h-auto text-white bg-gradient-to-b from-black to-gray-800"
      >
        <div className="flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto">
          <div className="pb-8">
            <p className="inline text-4xl font-bold border-b-4 border-gray-500">
              Contact
            </p>
            <p className="py-6">Submit the form below to get in touch with me</p>
          </div>
          <div className="flex justify-center">
            <form
                onSubmit={formHandler}
                action="https://getform.io/f/7e2e4f48-bd52-4b09-b793-1eb3becf0fa8"
                method="POST"
                className="flex flex-col w-full gap-2 md:w-1/2"
            >
              <input
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  type="text"
                  value={form.name}
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none"
              />
              <input
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  type="email" 
                  name="email"
                  value={form.email}
                  placeholder="Enter your email"
                  required
                  className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none"
              />
              <textarea
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  name="message"
                  rows="10"
                  value={form.message}
                  placeholder="Enter your message"
                  required
                  className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none"
              ></textarea>
              <button className="flex items-center px-6 py-3 my-8 text-white duration-300 rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-105">
                Let's Talk
              </button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Contact;
