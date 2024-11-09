import React, { useState } from "react";

const initialValue = {
  name: "",
  email: "",
  message: "", // تصحیح غلط املایی به 'message'
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
          className="w-full h-auto bg-gradient-to-b from-black to-gray-800 text-white"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Contact
            </p>
            <p className="py-6">Submit the form below to get in touch with me</p>
          </div>
          <div className="flex justify-center">
            <form
                onSubmit={formHandler}
                action="https://getform.io/f/7e2e4f48-bd52-4b09-b793-1eb3becf0fa8"
                method="POST"
                className="flex flex-col gap-2 w-full md:w-1/2"
            >
              <input
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  type="text"
                  value={form.name}
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="p-2 bg-transparent focus:outline-none rounded-md border-2 text-white"
              />
              <input
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  type="email" // تغییر به "email" برای اعتبارسنجی ایمیل
                  name="email"
                  value={form.email}
                  placeholder="Enter your email"
                  required
                  className="p-2 bg-transparent focus:outline-none rounded-md border-2 text-white"
              />
              <textarea
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  name="message"
                  rows="10"
                  value={form.message}
                  placeholder="Enter your message"
                  required
                  className="p-2 bg-transparent focus:outline-none rounded-md border-2 text-white"
              ></textarea>
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md hover:scale-105 duration-300">
                Let's Talk
              </button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Contact;
