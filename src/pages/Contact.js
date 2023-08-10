import React from "react";
import { contactDetails } from "../details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <main className="container max-width section">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 
      text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        For any questions please drop an e-mail
      </h1>
      <h3 className="text-center text-3xl md:text-md lg:text-6xl 
       font-semibold md:font-bold pt-2 md:py-6 pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
     <h3 className="text-3xl md:text-md lg:text-6xl font-semibold md:font-bold   text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"  >vaishnavicheruku7@gmail.com</h3>
      <span className="text-center text-content text-6xl font-light block">or</span>
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl  font-semibold md:font-bold pt-2 md:py-6">
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>
    </main>
  );
}

export default Contact;