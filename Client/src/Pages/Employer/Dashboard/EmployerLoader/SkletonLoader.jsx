import React from 'react'
import './skletonLoader.css'

function SkletonLoader() {
    return (
        <div className="skeleton-loader">
        <div className="skeleton-dashboard"></div>
        <div className="skeleton-tabs">
          <div className="skeleton-tab"></div>
          <div className="skeleton-tab"></div>
          <div className="skeleton-tab"></div>
          <div className="skeleton-tab"></div>
        </div>
        <div className="skeleton-bottom-box"></div>
      </div>
      );
}

export default SkletonLoader