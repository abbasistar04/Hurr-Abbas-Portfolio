import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Education</h4>
                <h5>Harvard CS50x</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Started my computer science journey with Harvard's legendary CS50x
              course, building a strong foundation in C, Python, SQL, and web development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>First Project</h4>
                <h5>Crent - Car Rental</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built my first major frontend project using React and Tailwind CSS.
              A 30-40 day deep dive into complex UI layouts and state management.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Major Milestone</h4>
                <h5>Travel Management System</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developed a refined management system, mastering SVG integration
              and advanced component architecture for a premium user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
