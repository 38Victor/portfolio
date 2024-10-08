import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/images/color-sharp.png";
import colorSharp2 from "../assets/images/color-sharp2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma, faHtml5, faCss3, faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import SQLIcon from '../assets/images/SQLIcon.png';
import AnimatedLetters from './AnimatedLetters'; 


export const Skills = () => {

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    { type: 'icon', icon: faFigma, color: '#DD0031', name: 'Figma' },
    { type: 'icon', icon: faHtml5, color: '#F06529', name: 'HTML5' },
    { type: 'icon', icon: faCss3, color: '#28a4d9', name: 'CSS3' },
    { type: 'icon', icon: faReact, color: '#5ED4FD', name: 'React' },
    { type: 'icon', icon: faJsSquare, color: '#EFD81D', name: 'JavaScript' },
    { type: 'icon', icon: faGitAlt, color: '#EC4D28', name: 'Git' },
    { type: 'image', src: SQLIcon, name: 'SQL', className: "SQLIcon" },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  const headingArray = ['S', 'k', 'i', 'l', 'l', 's'];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={headingArray}
                  idx={15}
                />
              </h2>
              <p>Over the years, I have honed my skills in various web development technologies, making me proficient in building dynamic and responsive web applications.
                Here are some of the key technologies and tools I specialize in.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                customLeftArrow={<div></div>}
                customRightArrow={<div></div>}
              >
                {skills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <div className="cube-container">
                      <div className='cubespinner'>
                        {skill.type === 'icon' ? (
                          <>
                            <div className='face1'>
                              <FontAwesomeIcon icon={skill.icon} color={skill.color} />
                            </div>
                            <div className='face2'>
                              <FontAwesomeIcon icon={skill.icon} color={skill.color} />
                            </div>
                            <div className='face3'>
                              <FontAwesomeIcon icon={skill.icon} color={skill.color} />
                            </div>
                            <div className='face4'>
                              <FontAwesomeIcon icon={skill.icon} color={skill.color} />
                            </div>
                            <div className='face5'>
                              <FontAwesomeIcon icon={skill.icon} color={skill.color} />
                            </div>
                            <div className='face6'>
                              <FontAwesomeIcon icon={skill.icon} color={skill.color} />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className='face1'>
                              <img src={skill.src} alt={skill.name} className="skill-image" />
                            </div>
                            <div className='face2'>
                              <img src={skill.src} alt={skill.name} className="skill-image" />
                            </div>
                            <div className='face3'>
                              <img src={skill.src} alt={skill.name} className="skill-image" />
                            </div>
                            <div className='face4'>
                              <img src={skill.src} alt={skill.name} className="skill-image" />
                            </div>
                            <div className='face5'>
                              <img src={skill.src} alt={skill.name} className="skill-image" />
                            </div>
                            <div className='face6'>
                              <img src={skill.src} alt={skill.name} className="skill-image" />
                            </div>
                          </>
                        )}
                      </div>
                      <p className="skill-name">{skill.name}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
      <img className="background-image-right" src={colorSharp2} alt="Image" />

    </section>
  );
};
