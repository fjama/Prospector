import "./Home-Student.css"
import StudentNavbar from "../../components/StudentNavbar";

import React, { useState } from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import API_BASE from '../config/config'

const HomeStudent = () => {

	const studentSFSUId = localStorage.getItem('studentSFSUId');
	const [active, setActive] = useState(false);
	const [students, setStudents] = React.useState([]);

	const handleClick = (e) => {
		e.preventDefault();
		console.log('The button was clicked.');
		setActive(true); // results will now be visible

		axios.post(`${API_BASE}/getmatches`, {
			studentSFSUId: studentSFSUId,
		})
			.then(response => 
				setStudents(response.data)
			)
			.catch(error => console.log(error))
	}

	return (
		<div className="home-student">
			<StudentNavbar />
			<h1 className="home-student-h1">Matches</h1>

			{active && <div style={{ marginTop: 20, lineHeight: '25px' }}>
				{students.map(student =>
					<Container key={student.userId} className="outter-result-container">
						<Container className="result-container">
							<div className="row-1">
								<p clasName="student-name"><b>{student.company}</b></p>
								<Button href="/newrecommend" variant="outline-dark" className="home-professor-btn3">Recommend</Button>
							</div>
							<div className="row-2">
								<p className="student-major"><b>Major -</b> </p>
								{/* <Button href={`${API_BASE}/resume?userId=${student.userId}`}>Download Resume</Button> */}
							</div>
						</Container>
					</Container>)}
			</div>}

			{/* <Container className="home-student-container">
				<h2 className="home-student-h2">Example Company Name</h2>

				<Row className="home-student-row">
					<Col className="home-student-col">Role Position Title - Location</Col>
					<Button href="#" variant="outline-dark" className="home-student-btn1">Not Interested</Button>
					<Button href="#" variant="outline-dark" className="home-student-btn2">Connect</Button>
				</Row>
			</Container>

			<Container className="home-student-container">
				<h2 className="home-student-h2">Example Company Name</h2>
				
				<Row className="home-student-row">
					<Col className="home-student-col">Role Position Title - Location</Col>
					<Button href="#" variant="outline-dark" className="home-student-btn1">Not Interested</Button>
					<Button href="#" variant="outline-dark" className="home-student-btn2">Connect</Button>
				</Row>
			</Container>

			<Container className="home-student-container">
				<h2 className="home-student-h2">Example Company Name</h2>
				
				<Row className="home-student-row">
					<Col className="home-student-col">Role Position Title - Location</Col>
					<Button href="#" variant="outline-dark" className="home-student-btn1">Not Interested</Button>
					<Button href="#" variant="outline-dark" className="home-student-btn2">Connect</Button>
				</Row>
			</Container> */}
		</div>
	);
}

export default HomeStudent;