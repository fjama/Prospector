import "./Navbar.css";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Marquee from 'react-text-marquee'
import Button from 'react-bootstrap/Button'
import { useState } from "react";

const StudentNavbar = (props) => {

	const handleClick = () => {
		localStorage.clear();
	}

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
				<Nav className="ml-auto">
					<Nav.Link href="/home-student">Home</Nav.Link>
					<Nav.Link href="/team">About Us</Nav.Link>
				</Nav>

				<div className="nav-button-container">
					<Button className="btn-primary" href="/account-student">Account</Button>
				</div>

				<div className="nav-button-container">
					<Button className="btn-primary" href="/" onClick={handleClick}>Sign Out</Button>
				</div>
			</Navbar>
		</div>
	);
}

export default StudentNavbar;
