import React from 'react';
import qrLine from '../assets/line_off.PNG';
import qrIG from '../assets/wechat.jpg';
import qrWeChat from '../assets/wechat.jpg';
import qrWhatsApp from '../assets/whatsapp.JPG';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-content">
        {/* <div className="footer-column">
          <h3>Alphard VIP</h3>
          <p>Premium car rental services in Thailand</p>
        </div> */}

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/fleet">Our Fleet</a></li>
            {/* <li><a href="/services">Services</a></li> */}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>Phone: +66 98 899 1576</li>
            <li>Email: easyalphardbkk@gmail.com</li>
          </ul>

          <div className="qr-links">
            {/* <h4>Follow us</h4> */}
            <div className="qr-icons">
              <a href="https://line.me/R/ti/p/@yourlineid" target="_blank" rel="noopener noreferrer">
                <img src={qrLine} alt="Line QR" />
              </a>
              {/* <a href="https://instagram.com/your_ig_username" target="_blank" rel="noopener noreferrer">
                <img src={qrIG} alt="Instagram QR" />
              </a> */}
              <a href="https://web.wechat.com" target="_blank" rel="noopener noreferrer">
                <img src={qrWeChat} alt="WeChat QR" />
              </a>
              <a href="https://web.wechat.com" target="_blank" rel="noopener noreferrer">
                <img src={qrWhatsApp} alt="WhatsAPP QR" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        &copy; {new Date().getFullYear()} Alphard VIP Car Rental
      </div>
    </footer>
  );
};

export default Footer;
