import React from "react";
import html from "./images/html1.jpg.png";
import css from "./images/css.jpg.png";
import bt from "./images/bt.jpg.png";
import js from "./images/js.jpg";
import react from "./images/react1.jpg";
import node from "./images/node.jpg.png";
import mysql from "./images/mysql.jpg.png";
import { GiBulletBill } from "react-icons/gi";

import { Container, Row, Col } from "react-bootstrap";
const Skill = () => {
  return (
    <div className="bg1" id="skill">
    <Container className="skillmain">
      <h1 className="text-center text-light projecth1">What I do</h1>
      <Row className="m-5">
        <Col lg="6" md='6' sm="12" xs="12">
         <p className="text-light mt-3 fs-5">
         <GiBulletBill className="text-warning "/> Develop highly interactive Front end / User Interfaces for your webapplications</p>

           <p className="text-light mt-5 fs-5"> <GiBulletBill className="text-warning"/> Proficiency in HTML, CSS, JavaScript.</p>
           <p className="text-light mt-5 fs-5"> <GiBulletBill className="text-warning"/> Experience in creating responsive and adaptive web designs.</p> 
        
        </Col>
        <Col lg="6" md='6' sm="12" xs="12">
          <Row>
          <Col lg='4' md='4' sm='6' xs='6'>
          <img src={html} className="d-block ms-auto me-auto wobble-skew-on-hover"></img> 
            <p className="text-light text-center">HTML-5</p>
          </Col>
          <Col lg='4' md='4' sm='6' xs='6'>
          <img src={css} className=" d-block ms-auto me-auto wobble-skew-on-hover"></img>
          <p className="text-light text-center">CSS-3</p>
          </Col>
          <Col lg='4' md='4' sm='6' xs='6'>
          <img src={bt} className=" d-block ms-auto me-auto wobble-skew-on-hover"></img>
          <p className="text-light text-center">Bootstrap-5</p>
          </Col>
          <Col lg='4' md='4' sm='6' xs='6'>
          <img src={js} className="img d-block ms-auto me-auto wobble-skew-on-hover"></img>
          <p className="text-light text-center">JavaScript</p>
          </Col>
          <Col lg='4' md='4' sm='6' xs='6'>
          <img src={react} className="img d-block ms-auto me-auto wobble-skew-on-hover"></img>
          <p className="text-light text-center">ReactJs</p>
          </Col>
          <Col lg='4' md='4' sm='6' xs='6'>
          <img src={node} className=" d-block ms-auto me-auto wobble-skew-on-hover"></img>
          <p className="text-light text-center">NodeJs(Basics)</p>
          </Col>
          <Col lg='12' md='12' sm='12' xs="12">
          <img src={mysql} className="d-block ms-auto me-auto wobble-skew-on-hover"></img>
          <p className="text-light text-center">Mysql</p>
          </Col>
       </Row>
        </Col>
      </Row>
      <Row>
        <Col className="ms-5"><h1 className="projecth1 mt-5">Certification</h1>
        <h4 className="text-light mt-4">Full Stack Developer - Kgisl Micro College</h4>
        <button className="btn2"><a href="https://drive.google.com/file/d/1Onip-pHSMoMNLlfFnit4H0iNOoC6nGXt/view?usp=drivesdk" target="_blank">Tap to view</a></button>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Skill;

