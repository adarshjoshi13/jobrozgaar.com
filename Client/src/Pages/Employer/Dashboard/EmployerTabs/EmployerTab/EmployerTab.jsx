import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

function EmployerTab({url,links,cls}) {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: 'ease-out',
            once: true
        });
    }, []);
    return (
        <Link to={links}>
            <div className="tabItem" data-aos="zoom-in">
                <img className={cls} src={url} alt="tabs" />
            </div>
        </Link>
    )
}

export default EmployerTab