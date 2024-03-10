import "./Navbar.css";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Marquee from 'react-text-marquee'
import Button from 'react-bootstrap/Button'

const HomeNavbar = () => {

	return (
		<div>
			<Marquee
				text="SFSU Software Engineering Project CSC 648-848, Spring 2021"
				// hoverToStop={true}
				// loop={true}
				// leading={4}
				// trailing={0}
				className="marquee"
			/>

			<Navbar className="navbar">
				<Navbar.Brand href="/">ProSpector</Navbar.Brand>
				<Nav className="home-ml-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/home-student">Student</Nav.Link>
					<Nav.Link href="/home-professor">Professor</Nav.Link>
					<Nav.Link href="/home-recruiter">Recruiter</Nav.Link>
					<Nav.Link href="/team">About Us</Nav.Link>
				</Nav>

				<div className="nav-button-container">
					<Button className="btn-primary" href="./login">Login</Button>
				</div>

				<div className="nav-button-container">
					<Button className="btn-outline-dark" href="./signup">Sign Up</Button>
				</div>
			</Navbar>
		</div>
	);
}

export default HomeNavbar;
