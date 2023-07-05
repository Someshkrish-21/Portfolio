import React from 'react'
import { Container } from 'react-bootstrap'
import Row from "react-bootstrap/Row";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { PiWhatsappLogoFill } from "react-icons/pi";
const Footer = () => {
  return (
    <Container fluid className='footersub'>
        <Container >
          <p className='footertxt text-center'>Copyright &copy; 2023 someshwaran</p>
          <Row className='text-center '>
              <span className=" hvr1">
                <a
                  href="https://github.com/Someshkrish-21"
                  className="lnk1 wobble-skew-on-hover ms"
                >
                  <BsGithub className='fs-5'/>
                </a>
                <a
                  href="https://www.linkedin.com/in/someshwaran-s-b14b8224a"
                  className="lnk2 wobble-skew-on-hover ms-3"
                >
                  <AiFillLinkedin className='fs-5'/>
                </a>
                <a
                  href="mailto:someshwaran.s37@gmail.com"
                  className="lnk3 wobble-skew-on-hover ms-3"
                >
                  <ImMail4 className='fs-5'/>
                </a>
                <a
                  href="https://instagram.com/somesh__.__?igshid=MzRlODBiNWFlZA=="
                  className="lnk4 wobble-skew-on-hover ms-3"
                >
                  <AiFillInstagram className='fs-5'/>
                </a>
                <a
                  href="https://wa.me/qr/TSJZC74OP3K5G1"
                  className="lnk5 wobble-skew-on-hover ms-3"
                >
                  <PiWhatsappLogoFill className='fs-5'/>
                </a>
              </span>
            </Row>  
          </Container>
    </Container>
  )
}

export default Footer