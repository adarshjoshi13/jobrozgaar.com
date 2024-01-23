import { Link } from 'react-router-dom';
import React,{useState} from 'react';
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
import "./Header.css"
import Logo from '../Logo/Logo';

function Header() {

    const [showSubmenu, setShowSubmenu] = useState(false);
    const navLinks = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Find a Talent",
            link: "/find-a-talent",
        },
        {
            title: "Find a Job",
            link: "/find-a-job",
        },
        {
            title: "About",
            link: "/about",
        },
        {
            title: "Services",
            link: "/service",
            moreLinks: [
                {
                    title: "Skill Development",
                    link: "/skill-development",
                },
                {
                    title: "Stuff and Placement",
                    link: "/staff-placement",
                },
                {
                    title: "Payroll Outsourcing",
                    link: "/payroll_outsourcing",
                },
                {
                    title: "Manpower Outsourcing",
                    link: "/manpower_outsourcing",
                },
            ],
        },
        {
            title: "Contact",
            link: "/contact",
        },
    ];

    return (
        <header>
        <nav className="navbar navbar-expand-md bg-light bsb-navbar bsb-navbar-hover bsb-navbar-caret">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <Logo />
            </Link>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center flex-grow-1">
                  {navLinks.map((link, index) => (
                    <li
                      className="nav-item"
                      key={index}
                      onMouseEnter={() => setShowSubmenu(index)}
                      onMouseLeave={() => setShowSubmenu(null)}
                    >
                      {link.moreLinks ? (
                        <div
                          className={`nav-item dropdown ${showSubmenu === index ? 'show' : ''}`}
                        >
                          <Link
                            className="nav-link dropdown-toggle"
                            to={link.link}
                            role="button"
                            id={`submenu-${index}`}
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded={showSubmenu === index ? 'true' : 'false'}
                          >
                            {link.title}
                          </Link>
                          <ul className="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby={`submenu-${index}`}>
                            {link.moreLinks.map((moreLink, subIndex) => (
                              <li key={subIndex}>
                                <Link className="dropdown-item" to={moreLink.link}>{moreLink.title}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <Link className="nav-link" to={link.link}>
                          {link.title}
                        </Link>
                      )}
                    </li>
                  ))}
  
                  <div className='icons-cover-fa'>
                    <li><Link to=""><span><FaFacebookF /></span></Link></li>
                    <li><Link to=""><span><FaGoogle /></span></Link></li>
                    <li><Link to=""> <span><FaTwitter /></span></Link></li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

    );
}

export default Header;