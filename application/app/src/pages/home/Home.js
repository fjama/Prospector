import "./Home.css";
import homeBanner from "../../images/home-banner.jpg";
import HomeNavbar from "../../components/HomeNavbar";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Footer from "../../components/Footer";

const Home = () => {
	return (
		<div>
			<HomeNavbar />
			<div className="home">
				<div className="home-div">
					<h2 className="home-h2">Get Matched with Your Ideal Candidate!</h2>
					<p className="home-p">ProSpector serves as the central hub for all SFSU students employment
					in the Tech industry. Create a profile and let our algorithm match you
					with an ideal candidate! ProSpector narrows down the time of looking
						for employers while giving exposure to those who don't.</p>
				</div>
				<Container className="home-container">
					<Row className="home-row">
						<div className="home-button-container">
							<Button href="/signup-student" className="home-btn-primary">Start Applying</Button>
						</div>
						<div className="home-button-container">
							<Button href="/signup-recruiter" className="home-btn-outline-light">Start Hiring</Button>
						</div>
					</Row>
				</Container>
				<Image className="home-banner" src={homeBanner} />
			</div>
		</div>
	);
}

export default Home;