import bgimage from "../../images/background-mountains.jpeg";
import profilePicture from "../../images/zhuojunhe.png";
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

const name = "Zhuojun He";
const city = "San Francisco";
const title = "Backend Support";
const major = "Computer Science";

const George = () => {
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
        My name is ZhuoJun He. I am from China. I have stayed at the U.S. about 6 years. <br></br>
        I play video game in my free time. Badminton with my friends. Also study and go to work. <br></br>
        Thank you.
          <br></br>
          
        </p>
      </Container>
    </div>
  );
};

export default George;
