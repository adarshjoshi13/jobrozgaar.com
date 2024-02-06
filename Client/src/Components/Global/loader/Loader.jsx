import React from 'react';
import './Loader.css'

const Loader = ({style}) => (
  <div className="loaderrr" style={{...style}}>
    <svg viewBox="25 25 50 50" width="100" height="100" className='svg'>
    <circle r="20" cy="50" cx="50" className='circle'></circle>
  </svg>
  </div>
);

export default Loader;
