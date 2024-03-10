// import { logDOM } from "@testing-library/react";

import bgimage from "../../images/background-mountains.jpeg";
import profilePicture from "../../images/Cameron-pfp.jpeg";
import "./member-page.css";
import Footer from "../../components/Footer";
import HomeNavbar from "../../components/HomeNavbar";

import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const name = "Cameron";
const city = "San Mateo";
const title = "Team Lead";
const major = "";

const Cameron = () => {
  return (
    <div>
      <HomeNavbar />

      <Breadcrumb>
        <Breadcrumb.Item href="/team/cameron">Cameron</Breadcrumb.Item>
        <Breadcrumb.Item href="/team/faisa">Faisa</Breadcrumb.Item>
        <Breadcrumb.Item href="/team/franklin">Franklin</Breadcrumb.Item>
        <Breadcrumb.Item href="/team/george">George</Breadcrumb.Item>
        <Breadcrumb.Item href="/team/tony">Tony</Breadcrumb.Item>
      </Breadcrumb>

      <Jumbotron
        className="background"
        style={{ backgroundImage: `url(${bgimage})`, backgroundSize: "cover" }}
      ></Jumbotron>

      <Container className="page-container" fluid="xl">
        <Row>
          <Col>
            <Image
              className="profile-picture"
              src={profilePicture}
              roundedCircle
            />
          </Col>
        </Row>
        <h1 className="name">{name}</h1>
        <h4 className="city">{city}</h4>
        <p className="title">
          {title} - Team 2 <br></br> {major}
        </p>

        <hr></hr>

        <p className="bio">
          I am a 5th student year CS major at SFSU. I started my CS journey in highschool, learning through online courses for fun and eventually taking all the classes my school had to offer in my Junior and Senior years.<br></br>
          <br></br>
          In my free time I enjoy working on music and cooking!
        </p>
      </Container>
    </div>
  );
};

export default Cameron;
