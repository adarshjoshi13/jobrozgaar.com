import React from 'react';
import { Link } from 'react-router-dom';
import "./ContactSection.css"
import { FaHome , FaPhoneAlt ,FaFacebookMessenger } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="contact-title">Get in Touch</h2>
          </div>
          <div className="col-lg-8">
            <form className="form-contact contact_form"  id="contactForm" >
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" onFocus={() => {}} onBlur={() => {}} placeholder=" Enter Message"></textarea>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input className="form-control valid" name="name" id="name" type="text" onFocus={() => {}} onBlur={() => {}} placeholder="Enter your name" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input className="form-control valid" name="email" id="email" type="email" onFocus={() => {}} onBlur={() => {}} placeholder="Email" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input className="form-control" name="subject" id="subject" type="text" onFocus={() => {}} onBlur={() => {}} placeholder="Enter Subject" />
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <button type="submit" className="button button-contactForm boxed-btn">Send</button>
              </div>
            </form>
          </div>
          <div className="col-lg-3 offset-lg-1">
            <div className="media contact-info">
              <span className="contact-info__icon"><FaHome/></span>
              <div className="media-body">
                <h3>Buttonwood, California.</h3>
                <p>Rosemead, CA 91770</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon"><FaPhoneAlt/></span>
              <div className="media-body">
                <h3>+1 253 565 2365</h3>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon"><FaFacebookMessenger/></span>
              <div className="media-body">
                <h3>[email protected]</h3>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
