import React from 'react';
import lineQR from '../assets/line_off.PNG';
import wechatQR from '../assets/wechat.jpg'; // ปรับ path ตามตำแหน่งไฟล์ Contact.jsx
import whatsappQR from '../assets/whatsapp.JPG'; 
const Contact = () => {
  return (
    <div className="contact-page">
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <h1>Contact Us</h1>
      <p>Email: easyalphardbkk@gmail.com</p>
      <p>Phone: +66 98 899 1576</p>

      <div className="qr-section">
        <h2>Scan to Connect</h2>
        <div className="qr-images">
          <div className="qr-item">
            <p>Line</p>
            <a href="https://line.me/R/ti/p/@yourlineid" target="_blank" rel="noopener noreferrer">
              <img src={lineQR}  alt="Line QR" />
            </a>
          </div>
          {/* <div className="qr-item">
            <p>Instagram</p>
            <a href="https://www.instagram.com/your_ig_username" target="_blank" rel="noopener noreferrer">
              <img src={wechatQR}  alt="Instagram QR" />
            </a>
          </div> */}
          <div className="qr-item">
            <p>WeChat</p>
            <a href="https://web.wechat.com/your_wechat_id" target="_blank" rel="noopener noreferrer">
              <img src={wechatQR} alt="WeChat QR" />
            </a>
          </div>
            <div className="qr-item">
            <p>WhatsApp</p>
            <a href="https://web.wechat.com/your_wechat_id" target="_blank" rel="noopener noreferrer">
              <img src={whatsappQR} alt="Whatsapp QR" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
