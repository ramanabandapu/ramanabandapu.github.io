import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Project.css";
import faasosimg from "../../assets/Home/faasosimg.png";
import koovsimg from "../../assets/Home/koovsimg.png";

import bluemercury from "../../assets/Home/bluemercury.png";
// import Particle from "./Particle";
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <div className="home-container" id="project">
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row
            style={{
              justifyContent: "center",
              paddingBottom: "10px",
              // gap: "20px",
            }}
          >
            <Col md={6} className="project-card">
              <ProjectCards
                imgPath={koovsimg}
                isBlog={false}
                title="KindMeal.com Clone"
                description={
                  <div className="project-card-text">
                    <p style={{ width: "90%" }}>
                      This is the Clone of KindMeal.com an online vegetarian
                      food restaurant. We were a team of five members and made
                      this project in 5 days during the Unit-2 construct week at
                      Masai School.
                    </p>
                    <h3>Tech Stack:</h3>
                    <p>HTML5, CSS, JAVASCRIPT</p>
                  </div>
                }
                link="https://kindmeal-clone-project.netlify.app/"
                target="_blank"
                link2="https://github.com/ramanabandapu/KindMeal---clone/tree/main/kindmeal-clone-project-master"
              />
            </Col>

            <Col md={6} className="project-card">
              <ProjectCards
                imgPath={faasosimg}
                isBlog={false}
                title="lovoda.com Clone"
                description={
                  <div className="project-card-text">
                    <p style={{ width: "90%" }}>
                      This is the Clone of lovoda.com an online fashion
                      jewellary store web app. An team project built in 5 days
                      during the Unit-5 construct week at Masai School.This
                      website consists of many cool functalities like user
                      authentication, filtering, add to cart, payment, checkout
                      and many more.{" "}
                    </p>
                    <h3>Tech Stack:</h3>{" "}
                    <p>HTML5,CSS,JAVASCRIPT, ReactJs, ReduxJs</p>
                  </div>
                }
                link="https://github.com/ramanabandapu/deluxe-change-1738/tree/main/src"
                target="_blank"
                link2="https://github.com/ramanabandapu/deluxe-change-1738/tree/main/src"

                // link2="https://github.com/pankaj5417/Faasos-clone.git" target="_blank"
              />
            </Col>
          </Row>
          <Row
            style={{
              justifyContent: "center",
              paddingBottom: "10px",
              // gap: "20px",
            }}
          >
            <Col md={6} className="project-card">
              <ProjectCards
                imgPath={faasosimg}
                isBlog={false}
                title="ZaraHome.com Clone"
                description={
                  <div className="project-card-text">
                    <p style={{ width: "90%" }}>
                      This is the Clone of ZaraHome.com an online web
                      application for interior designing products. We were a
                      team of 5 members and made this web app in 5 days during
                      the Unit-3 construct week at Masai School.This website
                      consists of many cool functalities like filtering , search
                      with debouncing,api,location based address,coupon and many
                      more.{" "}
                    </p>
                    <h3>Tech Stack:</h3>{" "}
                    <p>HTML5,CSS,JAVASCRIPT,API,MOCK SERVER </p>
                  </div>
                }
                link="https://github.com/ramanabandapu/zara-home-responsive/tree/main/zara%20home-unit4-responsive"
                target="_blank"
              />
            </Col>

            <Col md={6} className="project-card">
              <ProjectCards
                imgPath={bluemercury}
                isBlog={false}
                title="bluemercury.com Clone"
                description={
                  <div className="project-card-text">
                    <p style={{ width: "90%" }}>
                      This is the Clone of bluemercury.com an online web
                      application for cosmetics, skincare and spa products.This
                      is a team project built by 5 members in 5 days during the
                      RCT-211-B-18 construct week at Masai School which
                      consists of many cool functionalities like authentication,
                      filtering , sorting, add to wishlist, add to cart and
                      remove, coupon and many more..{" "}
                    </p>
                    <h3>Tech Stack:</h3>{" "}
                    <p>
                      {" "}
                      JAVASCRIPT, ReactJS, ReduxJS, MONGODB, ExpressJS, NodeJS,
                      ChakraUI{" "}
                    </p>
                  </div>
                }
                link="https://affable-scissors-7552.vercel.app/"
                target="_blank"
                link2="https://github.com/parthdeshmukh2/affable-scissors-7552/tree/main/bluemercury/src"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Projects;
