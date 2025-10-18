import React from "react";
import "../Css/Contact.css";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        {/* Header */}
        <div className="all-head">
          <h1>Contact</h1>
          <p>
            Connect with us for any inquiries or to request new movies and TV shows—we’re always happy to help
          </p>
        </div>

        <div className="all-contact">
          {/* Left Info */}
          <div className="contact-info">
            <div className="contact-head">
              <h1>Connect With Us</h1>
              <p>
                Please feel free to contact us regarding any need. We look forward to hearing from you. Also, you can post a request regarding new movies or TV Series. We will be more than happy to post your favorite movies and TV series
              </p>
            </div>

            <div className="address">
              <i className="ri-mail-fill"></i>
              <div className="add-info">
                <h3>Send Email</h3>
                <span>contact@businessdemo.com</span>
              </div>
            </div>

            <div className="address">
              <i className="ri-phone-fill"></i>
              <div className="add-info">
                <h3>Call Direct</h3>
                <span>+1 (646) 892-3456</span>
              </div>
            </div>

            <div className="address">
              <i className="ri-time-fill"></i>
              <div className="add-info">
                <h3>Business Hours</h3>
                <span>Mon-Sat: 8AM - 7PM</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="social">
              <h4>Follow Our Journey</h4>
              <a href="#"><RiInstagramFill /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><IoIosMail /></a>
              <a href="#"><FaXTwitter /></a>
            </div>
          </div>

          {/* Right Form */}
          <div className="contact-form">
            <form>
              <h3>Send Us Message</h3>
              <p>
                "We’d love to hear from you! Share your requests for new movies or TV shows, and we’ll do our best to add them."
              </p>

              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your full name" required />

              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email address" required />

              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" />

              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Enter message subject" />

              <label htmlFor="message">Your Message</label>
              <textarea id="message" placeholder="Enter your message"></textarea>

              <button type="submit" className="contact-btn">
                Send Message 
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
