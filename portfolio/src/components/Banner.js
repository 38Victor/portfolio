import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePicture from "../assets/images/profilePicture (1).jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer.", "Web Designer.", "UI/UX Designer."];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/VictorCampos.Resume.pdf'; 
    link.download = 'VictorCampos.Resume.pdf';
    console.log('Downloading resume from:', link.href);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>{`Hi! I'm Victor, A`} <span className="txt-rotate" dataPeriod="1000" data-rotate='["Web Developer.", "Web Designer.", "UI/UX Designer."]'><span className="wrap">{text}</span></span></h1>
                  <p>I'm a very ambitious front-end developer looking for a role in an established IT or Software company, with the opportunity to work with the latest technologies on challenging and diverse projects.</p>
                  <p>I'm very confident, naturally curious, and perpetually learning as I'm currently working on my Azure Fundamentals and COMPTIA Secuirty+ Certifications.</p>
                  <button onClick={downloadResume}>Download Resume <ArrowRightCircle size={25} /></button>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={profilePicture} alt="Profile Picture" className="profile-image" />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
