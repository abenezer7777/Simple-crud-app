import React from 'react'
const ContactUs = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold bg-lime-400 text-white p-2 mt-20 max-w-3xl">Contact Us</h1>
      <p className="text-lg mt-4">
        If you have any questions or inquiries, please feel free to reach out to
        us using the contact information below:
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Email</h2>
        <p className="text-lg">ethiotelecom@ethiotelecom.et</p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Phone</h2>
        <p className="text-lg">+2510935990020</p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Address</h2>
        <p className="text-lg">Addis Ababa City, Ethiopia</p>
      </div>
    </div>
  );
};

export default ContactUs;