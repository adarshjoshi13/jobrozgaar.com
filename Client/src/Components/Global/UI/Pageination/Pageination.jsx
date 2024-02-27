import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import "./Pageination.css"
import { Link } from 'react-router-dom'
function Pageination() {
  return (
    <div className="pagination-area pb-115 text-center">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="single-wrap d-flex justify-content-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-start">
                  <li className="page-item active"><Link className="page-link" href="#">01</Link></li>
                  <li className="page-item"><Link className="page-link" href="#">02</Link></li>
                  <li className="page-item"><Link className="page-link" href="#">03</Link></li>
                  <li className="page-item"><Link className="page-link" href="#"><span > <h5> <FaArrowRight/></h5> </span></Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pageination