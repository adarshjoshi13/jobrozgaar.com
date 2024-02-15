import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  // Sample data for demonstration
  const socialMediaLinks = [
    { icon: <FaFacebookF />, link: '#' },
    { icon: <FaTwitter />, link: '#' },
    { icon: <FaGoogle />, link: '#' },
    { icon: <FaInstagram />, link: '#' },
    { icon: <FaLinkedin />, link: '#' },
    { icon: <FaGithub />, link: '#' },
  ];

  const companyInfo = {
    name: 'ABOUT US',
    description: `Heaven frucvitful doesn't cover lesser dvsays appear creeping seasons so behold.`,
  };

  const products = [
    { name: 'MDBootstrap', link: '#' },
    { name: 'MDWordPress', link: '#' },
    { name: 'BrandFlow', link: '#' },
    { name: 'Bootstrap Angular', link: '#' },
  ];

  const usefulLinks = [
    { name: 'Your Account', link: '#' },
    { name: 'Become an Affiliate', link: '#' },
    { name: 'Shipping Rates', link: '#' },
    { name: 'Help', link: '#' },
  ];

  const contactInfo = {
    address: 'New York, NY 10012, US',
    email: 'info@example.com',
    phone: '+ 01 234 567 88',
    fax: '+ 01 234 567 89',
  };

  return (
    <div className="container-fluid p-0 my-0">
      {/* Footer */}
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#1c2331' }}>
        {/* Section: Social media */}
        <section className="d-flex justify-content-between p-4" style={{ backgroundColor: '#90aa47' }}>
          {/* Left */}
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            {socialMediaLinks.map((item, index) => (
              <Link key={index} to={item.link} className="text-white me-4">
                {item.icon}
              </Link>
            ))}
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold">{companyInfo.name}</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>{companyInfo.description}</p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                {products.map((product, index) => (
                  <p key={index}>
                    <Link to={product.link} className="text-white">{product.name}</Link>
                  </p>
                ))}
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                {usefulLinks.map((link, index) => (
                  <p key={index}>
                    <Link to={link.link} className="text-white">{link.name}</Link>
                  </p>
                ))}
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p><i className="fas fa-home mr-3"></i> {contactInfo.address}</p>
                <p><i className="fas fa-envelope mr-3"></i> {contactInfo.email}</p>
                <p><i className="fas fa-phone mr-3"></i> {contactInfo.phone}</p>
                <p><i className="fas fa-print mr-3"></i> {contactInfo.fax}</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links */}
        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <Link className="text-white" to="#">GrossRogzar</Link>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
    /* End of .container */
  );
};

export default Footer;
