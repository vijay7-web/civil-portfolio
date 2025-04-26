import React from "react";

export default function Contact() {
  return (
    <section className="py-16 px-8 bg-gray-400">
      <h2 className="text-4xl font-bold text-center">Contact Us</h2>
      <form className="mt-8 max-w-lg mx-auto space-y-4">
        <div>
          <label className="block">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 rounded border"
          />
        </div>
        <div>
          <label className="block">Email</label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-3 rounded border"
          />
        </div>
        <div>
          <label className="block">Message</label>
          <textarea
            placeholder="Your message"
            className="w-full p-3 rounded border"
          ></textarea>
        </div>
        <button className="w-full py-3 bg-orange-600 text-white rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}
