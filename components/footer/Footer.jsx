import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Aditya Mohapatra. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
