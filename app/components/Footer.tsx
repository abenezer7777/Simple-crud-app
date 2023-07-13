import React from 'react'
const Footer = () => {
  return (
    <div className="py-5 text-center text-cyan-50 opacity-70">
      <p >
        &copy; {new Date().getFullYear()}{" "}
        <b>
          <a className="hover:text-lime-500" rel="noopener noreferrer" target="_blank" href="https://abenezertamene.com/">
            Abenezer Tamene
          </a>
        </b>
      </p>
    </div>
  );
};
export default Footer;