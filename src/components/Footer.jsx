import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="top-footer">
          <div className="logo-div">
            <img src="/images/logo.PNG" alt="logo" className="footer-logo" />
            <div className="social-media">
              <a href="#">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="link-div">
            <h3>Quick Links</h3>
            <div>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Gallery</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="contact-div">
            <h3>Contact</h3>
            <div>
              <a href="#">
                <i class="fa-solid fa-location-dot"></i>
                <p>Basantapur Kathmandu, Nepal</p>
              </a>
              <a href="#">
                <i class="fa-solid fa-phone"></i>
                <p>9869134475</p>
              </a>
              <a href="#">
                <i class="fa-solid fa-envelope"></i>
                <p>email@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          Copyright &copy; 2024 Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
