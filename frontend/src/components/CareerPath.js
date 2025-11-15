import React from 'react';

function CareerPath({ job, careerPath, onClose }) {
  return (
    <div className="career-path-modal">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        
        <h2>Career Path for {job.title}</h2>
        
        <div className="path-visualization">
          <div className="current-position">
            <h3>Current Position</h3>
            <div className="position-card current">
              <p className="position-title"> {job.title}</p>
              <p className="position-salary"> {job.salary_range_formatted}</p>
              <div className="position-skills">
                <p>Required Skills:</p>
                <div className="skill-tags">
                  {job.required_skills.map(skill => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {careerPath.next_steps && careerPath.next_steps.length > 0 && (
            <>
              <div className="path-arrow">↓</div>
              <div className="future-positions">
                <h3>Next Career Steps</h3>
                {careerPath.next_steps.map((step, index) => (
                  <div key={index}>
                    <div className="position-card future">
                      <p className="position-number">{index + 1}</p>
                      <p className="position-title">{step.title}</p>
                      
                      {/* --- THIS IS THE FIX --- */}
                      {/* Use the pre-formatted salary string from the backend */}
                      {step.salary_range_formatted && (
                        <p className="position-salary">
                          {step.salary_range_formatted}
                        </p>
                      )}
                      {/* --- END OF FIX --- */}

                      {step.required_skills && (
                        <div className="position-skills">
                          <p>Additional Skills Needed:</p>
                          <div className="skill-tags">
                            {step.required_skills
                              .filter(skill => !job.required_skills.includes(skill))
                              .map(skill => (
                                <span key={skill} className="skill-tag new">
                                  {skill}
                                </span>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                    {index < careerPath.next_steps.length - 1 && (
                      <div className="path-arrow">↓</div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CareerPath;