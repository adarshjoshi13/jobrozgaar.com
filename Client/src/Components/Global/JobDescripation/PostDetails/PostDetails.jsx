import React from 'react'
import "./PostDetails.css"
function PostDetails({sections}) {
  return (
    <div className="job-post-details p-3">
            {sections.map((section, index) => (
                <div className="post-details" key={index}>
                    <div className="small-section-tittle">
                        <h4>{section.title}</h4>
                    </div>
                    <ul>
                        {section.content.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
  )
}

export default PostDetails