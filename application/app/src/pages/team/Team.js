import { Link } from "react-router-dom";
import HomeNavbar from "../../components/HomeNavbar";

import franklinPic from "../../images/Franklin-pfp.jpg";
import cameronPic from "../../images/Cameron-pfp.jpeg";
import faisaPic from "../../images/Faisa-pfp.jpg";
import tonyPic from "../../images/profile_pic_Tony.jpg";
import georgePic from "../../images/zhuojunhe.png";

import Breadcrumb from 'react-bootstrap/Breadcrumb'
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
    link: "/team/cameron",
  },
  {
    id: 2,
    name: "Faisa",
    title: "Github Master",
    city: "Oakland",
    major: "Computer Science",
    image: faisaPic,
    link: "/team/fasia",
  },
  {
    id: 3,
    name: "Franklin",
    title: "Frontend Lead",
    city: "San Francisco",
    major: "Computer Science",
    image: franklinPic,
    link: "/team/franklin",
  },
  {
    id: 4,
    name: "Tony",
    title: "Backend Lead",
    city: "San Jose",
    major: "Computer Science",
    image: tonyPic,
    link: "/team/tony",
  },
  {
    id: 5,
    name: "George",
    title: "Backend Support",
    city: "San Francisco",
    major: "Computer Science",
    image: georgePic,
    link: "/team/george",
  },
];

const Team = () => {
  return (
    <div>
      <HomeNavbar />

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
    </div>
  );
}

export default Team;