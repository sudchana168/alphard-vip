import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Navbar = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <div style={{
            width: '150px',
            height: '50px',
            backgroundColor: '#d4af37',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}>
            ALPHARD VIP
          </div>
        </Link>
        <div className="nav-links">
          <Link to="/">{lang === "th" ? "หน้าแรก" : "Home"}</Link>
          <Link to="/details">{lang === "th" ? "รายละเอียด" : "Details"}</Link>
          <Link to="/fleet">{lang === "th" ? "รถของเรา" : "Our Fleet"}</Link>
          <Link to="/about">{lang === "th" ? "เกี่ยวกับเรา" : "About Us"}</Link>
          <Link to="/contact">{lang === "th" ? "ติดต่อเรา" : "Contact"}</Link>

          {/* ปุ่มเปลี่ยนภาษา */}
          <div style={{ marginLeft: "15px" }}>
            <button
              onClick={() => toggleLang("th")}
              style={{
                background: lang === "th" ? "#222" : "#ccc",
                color: "white",
                padding: "5px 10px",
                marginRight: "5px",
                border: "none",
                cursor: "pointer"
              }}
            >
              ไทย
            </button>
            <button
              onClick={() => toggleLang("en")}
              style={{
                background: lang === "en" ? "#222" : "#ccc",
                color: "white",
                padding: "5px 10px",
                border: "none",
                cursor: "pointer"
              }}
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


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="container">
//         <Link to="/" className="logo">
//           <div style={{
//             width: '150px',
//             height: '50px',
//             backgroundColor: '#d4af37',
//             color: 'white',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             fontWeight: 'bold'
//           }}>
//             ALPHARD VIP
//           </div>
//         </Link>
//         <div className="nav-links">
//           <Link to="/">Home</Link>
//           <Link to="/details">Details</Link>
//           <Link to="/fleet">Our Fleet</Link>
//           {/* <Link to="/services">Services</Link> */}
//           <Link to="/about">About Us</Link>
//           <Link to="/contact">Contact</Link>
//           {/* <Link to="/booking" className="book-now">Book Now</Link> */}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;