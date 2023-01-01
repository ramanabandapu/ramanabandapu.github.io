import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Project.css";
import careathome from "../../assets/Home/careathome.png";
import kindmeal from "../../assets/Home/kindmeal.png";
import ketto from "../../assets/Home/ketto.png";
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
            {/* *********************BLUEMERCUURY********************************************************* */}
            <Col md={6} className="project-card">
              <ProjectCards
                imgPath={bluemercury}
                isBlog={false}
                title="bluemercury.com Clone"
                description={
                  <div className="project-card-text">
                    <p style={{ width: "90%" }}>
                      An online web application for cosmetics, skincare and spa
                      products. A team project built by 5 members in 5 days
                      during the RCT-211-B-18 construct week at Masai School
                      which consists of many cool functionalities like
                      authentication, filtering , sorting, add to wishlist, add
                      to cart and remove, coupon and many more..{" "}
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

            {/* **************************BLUEMERCURY********************************************************** */}

            {/* -----------------------------KINDMEAL-------------------------------------- */}

            {/* ------------------------------ LOVODA ----------------------------------------------------- */}
            <Col md={6} className="project-card">
              <ProjectCards
                imgPath={careathome}
                isBlog={false}
                title="urbancompany.com Clone"
                description={
                  <div className="project-card-text">
                    <p style={{ width: "90%" }}>
                      CareAtHome is an online platform helping customers to book
                      reliable & high quality services, delivered by trained
                      professionals conveniently at home. A team project built
                      by 5 members in 5 days.This website consists of many cool
                      functalities like user authentication,add to cart, payment
                      and many more.{" "}
                    </p>
                    <h3>Tech Stack:</h3>{" "}
                    <p>
                     ReactJs, ReduxJs, NodeJs, ExpressJS,
                      MongoDB, ChakraUI
                    </p>
                  </div>
                }
                link="https://careathome.netlify.app/"
                target="_blank"
                link2="https://github.com/pragati-tripathi05/Care-At-Home"

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
                imgPath={ketto}
                isBlog={false}
                title="ketto.com Clone"
                description={
                  <div className="project-card-text">
                    <p style={{ width: "90%" }}>
                      ketto.com is India's best online crowdfunding platform.
                     
                     A collaborative project built by 4 members in 5 days during
                      the RCT-211 construct week at Masai School.This website
                      consists of many cool functalities like filtering, search
                      with debouncing, user login and signup and many
                      more.{" "}
                    </p>
                    <h3>Tech Stack:</h3>{" "}
                    <p>JAVASCRIPT, ReactJS, ReduxJS, chakraUI </p>
                  </div>
                }
                link="https://cloneketto.netlify.app/"
                target="_blank"
                link2="https://github.com/Aditya-Raj-Dev/racial-lip-1108/tree/main/racial-lip-1108/src"
              />
            </Col>
            {/* ****************************** KINDMEAL *************************************************** */}
            <Col md={6} className="project-card">
              <ProjectCards
                imgPath={kindmeal}
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
            {/* *******************************KINDMEAL***************************************************** */}
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Projects;
