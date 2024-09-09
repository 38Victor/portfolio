import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/images/nav-icon1.svg';
import github from '../assets/images/github.png';

export const Footer = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Thank You For Visiting !", "Let's Start a Conversation."];
  const period = 2000; 

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(50); 
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period); 
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100); 
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-end">
          <Col size={12} sm={6} className="d-flex justify-content-center">
            <h1 className="footer-message">{text}</h1>
          </Col>
          <Col size={12} sm={6} className="d-flex flex-column align-items-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/victor-manuel-campos-goitia-b75354233/" target="_blank" rel="noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/38victor" target="_blank" rel="noreferrer">
                <img src={github} alt="GitHub" />
              </a>
            </div>

            <p className="copyright">© Copyright 2024. Victor Campos All Rights Reserved</p>
            <p className="email">victor.goitia.campos@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
