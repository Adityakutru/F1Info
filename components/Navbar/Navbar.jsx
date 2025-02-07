import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Website Logo" className="logo" />
      <ul>
      <li><Link to="bg" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="drivers" smooth={true} offset={-267} duration={500}>Drivers</Link></li>
        <li><Link to="teams" smooth={true} offset={-260} duration={500}>Teams</Link></li>
        <li><Link to="championship" smooth={true} offset={0} duration={500}>Championship</Link></li>
        <li><Link to="history" smooth={true} offset={0} duration={500}>History</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
