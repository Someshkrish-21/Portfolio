import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import photo from "./images/photo.gif";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { PiWhatsappLogoFill } from "react-icons/pi";
import project1 from "./images/project1.png";
import recipe from "./images/recipe.jpg";
import loginimg1 from "./images/loginimg1.png";
import { Link } from "react-router-dom";


const Introduction = () => {

  
  return (
    <div className="bodymain me" id="intro">
      <Container className="mt-3">
        <Row>
          <Col lg="8" md="8">
            <h5 className="text-light mt-3">HI THERE I'M</h5>
            <h2 className="introcolor mt-4">SOMESHWARAN.S</h2>

            <p className="fs-5 text-light  mt-3">
              {" "}
              <span className="introcolor fs-1 ">Front End Developer</span>{" "}
              Looking to start the career as an entry-level developer with a
              reputed firm driven by technology.
            </p>
            <button className="btn1">
              <a
                href="https://drive.google.com/file/d/1P4jE2Yvt12JGuXEQiHo7s7gYRSTrQYKn/view?usp=drivesdk"
                target="_blank"
              >
                DOWNLOAD CV
              </a>
            </button>
            <Row>
              <span className="mt-5 hvr1">
                <a
                  href="https://github.com/Someshkrish-21"
                  className="lnk1 wobble-skew-on-hover ms"
                >
                  <BsGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/someshwaran-s-b14b8224a"
                  className="lnk2 wobble-skew-on-hover ms-3"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  href="mailto:someshwaran.s37@gmail.com"
                  className="lnk3 wobble-skew-on-hover ms-3"
                >
                  <ImMail4 />
                </a>
                <a
                  href="https://instagram.com/somesh__.__?igshid=MzRlODBiNWFlZA=="
                  className="lnk4 wobble-skew-on-hover ms-3"
                >
                  <AiFillInstagram />
                </a>
                <a
                  href="https://wa.me/qr/TSJZC74OP3K5G1"
                  className="lnk5 wobble-skew-on-hover ms-3"
                >
                  <PiWhatsappLogoFill />
                </a>
              </span>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <h1 className="projecth1 text-center mb-5 pb-4 mt-5">Projects</h1>
          <Col
            xs={{ order: "2" }}
            sm={{ order: "2" }}
            lg={{ order: "1" }}
            md={{ order: "1" }}
          >
            <p className="text-light fs-5 txtaln">
              I developed an E-commerce website project built using React and
              Redux. This project demonstrates my expertise in front-end
              development, highlighting my skills in creating responsive user
              interfaces, implementing state management with Redux, and
              integrating various e-commerce features such as product catalog,
              shopping cart. The project reflects my ability to deliver
              high-quality web solutions.
            </p>
          </Col>

          <Col
            xs={{ order: "1" }}
            sm={{ order: "1" }}
            lg={{ span: "6", order: "2" }}
            md={{ span: "6", order: "2" }}
          >
            <div class="content d-block me -auto">
              <div class="content-overlay d-block ms-auto"></div>
              <img
                src={project1}
                className="imgsize d-block ms-auto w-100"
              ></img>
              <div class="content-details fadeIn-top">
                <h3>EFILIO FASHION FACTORY</h3>
                <p>Front-End project using React.Js</p>
              </div>
            </div>{" "}
            <button className="btn2 d-block me-auto ms-auto"
                href="https://github.com/Someshkrish-21/E-Commerce-website"
                target="_blank"
              >
                Tap to view
            </button>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col
            xs={{ order: "2" }}
            sm={{ order: "2" }}
            lg={{ order: "1" }}
            md={{ order: "1" }}
          >
            <p className="text-light fs-5 txtaln">
              I have developed a food recipe app using React JS. This app
              utilizes API integration to fetch recipe data and dynamically
              displays dishes based on user search queries. The interactive
              interface allows users to explore a variety of recipes and
              experiment with different culinary delights. This project
              showcases my skills in React JS development and my ability to
              create engaging and user-friendly applications.
            </p>
          </Col>

          <Col
            xs={{ order: "1" }}
            sm={{ order: "1" }}
            lg={{ span: "6", order: "2" }}
            md={{ span: "6", order: "2" }}
          >
            <div class="content">
              <div class="content-overlay"></div>
              <img src={recipe} className="imgsize d-block ms-auto w-100"></img>
              <div class="content-details fadeIn-top">
                <h3>RECIPE APP</h3>
                <p>Front-end and fetch data from API</p>
              </div>
            </div>
            <button className="btn2 d-block me-auto ms-auto">
              <a
                href="https://github.com/Someshkrish-21/Recipe-app"
                target="_blank"
              >
                Tap to view
              </a>
            </button>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col
            xs={{ order: "2" }}
            sm={{ order: "2" }}
            lg={{ order: "1" }}
            md={{ order: "1" }}
          >
            <p className="text-light fs-5 txtaln">
              This portfolio project aims to implement a secure authentication
              system for a sign-in and sign-up page using MySQL, ReactJS, and
              Node.js. The system will allow users to create an account,
              securely store their credentials in a MySQL database, and
              authenticate their identity during the sign-in process. ReactJS
              will handle the frontend, while Node.js will handle the backend,
              ensuring smooth communication with the database and secure
              authentication flow.
            </p>
          </Col>

          <Col
            xs={{ order: "1" }}
            sm={{ order: "1" }}
            lg={{ span: "6", order: "2" }}
            md={{ span: "6", order: "2" }}
          >
            <div class="content">
              <div class="content-overlay"></div>
              <img
                src={loginimg1}
                className="imgsize d-block ms-auto w-100"
              ></img>

              <div class="content-details fadeIn-top">
                <h3>AUTHENTICATION PAGE</h3>
                <p>Authenticating signin and signup page using mysql</p>
              </div>
            </div>
            <button className="btn2 d-block me-auto ms-auto">
              <a
                href="https://github.com/Someshkrish-21/User-Login-Authentication"
                target="_blank"
              >
                Tap to view
              </a>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Introduction;
