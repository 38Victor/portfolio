import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ProjectCard = ({ title, description, imgUrl, link, languages }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-link">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} className="project-img" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <div className="languages">
              {languages && languages.map((language, index) => {
                if (language.type === 'icon') {
                  return (
                    <FontAwesomeIcon 
                      key={index} 
                      icon={language.icon} 
                      size="2x" 
                      className="language-icon" 
                      style={{ color: language.color }} 
                    />
                  );
                } else if (language.type === 'image') {
                  return (
                    <img 
                      key={index} 
                      src={language.src} 
                      className="language-icon" 
                      style={{ width: '32px', height: '32px', margin: '0 5px' }} 
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};
