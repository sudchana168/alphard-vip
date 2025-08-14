import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import '../Navbar.css';

const Navbar = () => {
  const { lang, toggleLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  // ฟังก์ชันปิดเมนู
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <div className="logo-box">ALPHARD VIP</div>
        </Link>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav Links */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={handleLinkClick}>{lang === 'th' ? 'หน้าแรก' : 'Home'}</Link>
          <Link to="/details" onClick={handleLinkClick}>{lang === 'th' ? 'รายละเอียด' : 'Details'}</Link>
          <Link to="/fleet" onClick={handleLinkClick}>{lang === 'th' ? 'รถของเรา' : 'Our Fleet'}</Link>
          <Link to="/about" onClick={handleLinkClick}>{lang === 'th' ? 'เกี่ยวกับเรา' : 'About Us'}</Link>
          <Link to="/contact" onClick={handleLinkClick}>{lang === 'th' ? 'ติดต่อเรา' : 'Contact'}</Link>

          {/* Language Buttons */}
          <div className="language-buttons">
            <button
              className={lang === 'th' ? 'active' : ''}
              onClick={() => { toggleLang('th'); setMenuOpen(false); }}
            >
              ไทย
            </button>
            <button
              className={lang === 'en' ? 'active' : ''}
              onClick={() => { toggleLang('en'); setMenuOpen(false); }}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
