import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import myimg from './images/myimg.png'

const About = () => {
  return (
    <Container fluid className='abt1 pb-5'>
    <Container className='abt1 '>
    <h1 className="projecth1 text-center mb-5 pb-4">About</h1>
      <Container className='aboutrow'>
    
        <Row className='justify-content-center'>
        <Col className='' lg="4"> 
         <div className='img-wrapper'><img src={myimg} className="w-75 d-block ms-auto me-auto inner-img"></img></div>
        
        </Col>
        <Col className='text-light my-auto fs-4' lg='6'> 
        <p>Name : Someshwaran S</p>
        <p>Profile : Front-End Developer</p>
        <p>Email : someshwaran.s37@gmail.com</p>
        <p>Phone : 9600274887</p>
        </Col>
        </Row>
        </Container>
        <Col><p className='text-light mt-5 fs-5 aboutcnt'>I am a fresher web developer skilled in HTML, CSS, JavaScript, React, Node.js, and MySQL. With a passion for creating dynamic and user-friendly web applications, I strive to deliver high-quality code and stay up-to-date with industry trends. My objective is to contribute to innovative web solutions, leveraging my skills and knowledge. Explore my portfolio to see examples of my work, showcasing my ability to transform design concepts into functional websites. I am committed to intuitive user experiences, clean code, and exceeding client expectations. Let's collaborate on challenging projects and create remarkable web experiences. Connect with me to discuss potential opportunities. Thank you for visiting my portfolio!</p></Col>
    </Container>
    </Container>
  )
}

export default About
