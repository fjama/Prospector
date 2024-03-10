import bgimage from "../../images/background-mountains.jpeg";
import profilePicture from "../../images/profile_pic_Tony.jpg";
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

const name = "Tony Cao";
const city = "San Jose";
const title = "Backend Lead";
const major = "Computer Science";

const Tony = () => {
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
              className="profile-picture img-thumbnail"
              src={profilePicture}
              responsive
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
          My name is Tony, I am a senior at San Francisco State University majoring 
          in Computer Science. I am interested in Web Development and AI/Machine Learning.
          My goal as of this moment is to explore the field of technology, learn as much as 
          I can while discovering my interest and hopefully after graduation, I will be able to 
          land a job working in a specialization of my interest. 
          <br></br>
          <br></br>
          I like to ride my bike on weekends and play games like League of Legends and Valorant. 
          Playing basketball was my first favorite hobby however due to the ongoing pandemic, I found  
          myself playing less basketball and tuning in to more NBA and NCAA games. 
        </p>
      </Container>
    </div>
  );
};

export default Tony;
