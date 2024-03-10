import { Link } from "react-router-dom";
import Footer from "./components/footer";

import franklinPic from "./images/Franklin-pfp.jpg";
import cameronPic from "./images/Cameron-pfp.jpeg";
import faisaPic from "./images/Faisa-pfp.jpg";
import tonyPic from "./images/profile_pic_Tony.jpg";
import georgePic from "./images/zhuojunhe.png";

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const team = [
  {
    id: 1,
    name: "Cameron",
    title: "Team Lead",
    city: "San Mateo",
    major: "Major",
    image: cameronPic,
    link: "/aboutme/cameron",
  },
  {
    id: 2,
    name: "Faisa",
    title: "Github Master",
    city: "Oakland",
    major: "Computer Science",
    image: faisaPic,
    link: "/aboutme/fasia",
  },
  {
    id: 3,
    name: "Franklin",
    title: "Frontend Lead",
    city: "San Francisco",
    major: "Computer Science",
    image: franklinPic,
    link: "/aboutme/franklin",
  },
  {
    id: 4,
    name: "Tony",
    title: "Backend Lead",
    city: "San Jose",
    major: "Computer Science",
    image: tonyPic,
    link: "/aboutme/tony",
  },
  {
    id: 5,
    name: "George",
    title: "Backend Support",
    city: "San Francisco",
    major: "Computer Science",
    image: georgePic,
    link: "/aboutme/george",
  },
];

const AboutMe = ({ pages }) => {
  return (
    <div>
      <h2 align="center" style={{ paddingBottom: "3%" }}>
        Our Amazing Team
      </h2>

      <Container>
        <Row className="rows">
          {team.map((member) => {
            return (
              <Col className="col-sm-4">
                <div align="center">
                  <Image
                    style={{ width: "150px", height: "150px" }}
                    src={member.image}
                    roundedCircle
                  />
                  <br></br>
                  <Link to={member.link}>
                    <b>{member.name}</b>
                  </Link>
                  <p>{member.title}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer footer="footer"/>
    </div>
  );
};

export default AboutMe;
