import React from 'react'
import TextAnnimation from "./components/TextAnnimation";

const HomePage = () => {
  
  return (
   
    <div className="flex flex-col items-center justify-center h-full">
        
      <div className="mb-4">
        <img
          src="https://www.ethiotelecom.et/wp-content/uploads/2021/04/TeleBirr-Logo.svg"
          alt="Logo"
        />
      </div>
      <span className="pl-5 w-full h-7 bg-lime-400"></span>
      <div className="my-5 sm:py-5 text-center text-sky-600 font-bold">
       <TextAnnimation/>
      </div>
      <span className="w-full h-7 bg-lime-400"></span>
      <div className="text-center">
        <p className="text-lg mt-5">
          Welcome to our website! We offer the best telecommunication services
          to meet your needs. With telebirr, you can enjoy a seamless and
          reliable experience. Choose us for accessibility, fast connections,
          and convenience. Join our community today!
        </p>
      </div>
    </div>
   
  );
};

export default HomePage;
