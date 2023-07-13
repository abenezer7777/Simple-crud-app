"use client";
import React from 'react'
import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  return (
    
      <div className="text-center text-sky-600 font-bold">
        <TypeAnimation
          sequence={[
            `Why you should choose telebirr - Accessible`,
            1000,
            "Why you should choose telebirr - Fast",
            1000,
            "Why you should choose telebirr - Reliable",
            1000,
            "Why you should choose telebirr - Convenient",
            1000,
          ]}
          wrapper="span"
          speed={40}
          style={{ fontSize: "2em", display: "inline-block"}}
          repeat={Infinity}
        />
      </div>
  );
};

export default TextAnimation;