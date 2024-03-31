import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "replace with service id",
        "replace with template id",
        form.current,
        "replace with user id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="h-lvh">
        <Navbar/>
        <div className="bg-fuchsia-50 p-12 h-screen">
            <h2 className="text-4xl font-bold mb-4 text-fuchsia-900 ">Contact Us</h2>
            <p className='text-2xl mt-6 text-fuchsia-800 pl-2'>
                Join our vibrant community of photography enthusiasts and connect with like-minded individuals from around 
                the globe. Follow us on social media to stay updated on the latest additions to our gallery, photography tips,
                and community events. Whether you're seeking inspiration,feedback, or simply a place to share your passion for 
                photography, you'll find a warm welcome here at <span className='font-semibold ml-2 mr-2 text-xl'>ImageInfinity</span>.
            </p>
            <p className='text-xl mt-6 text-fuchsia-900 pl-2'>
                Have a question, suggestion, or just want to say hello? We'd love to hear from you! Simply 
                fill out the form below, and we'll get back to you as soon as possible. Your feedback is valuable 
                to us, and we're here to assist you every step of the way. Let's start the conversation!
            </p>
            <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg md:mt-10">
                <div className="mb-4">
                <label htmlFor="user_name" className="block  text-fuchsia-800 text-lg font-bold mb-2">Name</label>
                <input type="text" id="user_name" name="user_name" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                <label htmlFor="user_email" className="block  text-fuchsia-800 text-lg font-bold mb-2">Email</label>
                <input type="email" id="user_email" name="user_email" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                <label htmlFor="message" className="block  text-fuchsia-800 text-lg font-bold mb-2">Message</label>
                <textarea id="message" name="message" required className="shadow appearance-none border rounded w-full py-9 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <button type="submit" className="bg-transparent border border-fuchsia-800 hover:bg-fuchsia-900 hover:border-fuchsia-50 hover:text-fuchsia-50 text-fuchsia-800 font-bold py-2 px-4 rounded">Send</button>
            </form>
        </div>
        <Footer/>
    </div>
  );
};

export default ContactUs;
