import "./Home-Professor.css"
import { Link } from "react-router-dom";
import ProfessorNavbar from "../../components/ProfessorNavbar";

import React, { useState } from 'react'
import Select from 'react-select'
import axios from 'axios'

import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import API_BASE from '../config/config'

const HomeProfessor = () => {

	const [searchValue, setSearchValue] = useState('default');
	const [active, setActive] = useState(false);
	const [students, setStudents] = React.useState([]);

	const handleClick = (e) => {
		e.preventDefault();
		console.log('The button was clicked.');
		setActive(true); // results will now be visible

		axios.post(`${API_BASE}/searchstudent`, {
			studentSFSUId: searchValue,
		})
			.then(response => 
				setStudents(response.data)
			)
			.catch(error => console.log(error))
	}


	return (
		<div className="home-professor">
			<ProfessorNavbar />
			<Container>
				<h1 className="home-professor-h1">Recommend Students!</h1>
				<Row className="home-professor-row">
					<InputGroup className="home-professor-input">
					<Col className="home-professor-col">
						<FormControl aria-describedby="basic-addon1" placeholder="Search Student ID" 
							className="home-professor-search" onChange={e => setSearchValue(e.target.value)} />
					</Col>		
						<div>
							<Button type="submit" className="home-professor-btn1" onClick={handleClick}>Search</Button>
						</div>
						<div>
							<Button href="/viewrecommend" variant="outline-dark" className="home-professor-btn2">View Recommedations</Button>
						</div>
					</InputGroup>
				</Row>
			</Container>	
			
			{/* <Container className="home-professor-container">
				<h2 className="home-professor-h2">Student Name</h2>
				<Link to="#" className="home-professor-link">View Student Portal</Link>
				<Button href="/newrecommend" variant="outline-dark" className="home-professor-btn3">Recommend</Button>
			</Container> */}

			{active && <div style={{ marginTop: 20, lineHeight: '25px' }}>
				{students.map(student =>
					<Container key={student.userId} className="home-professor-outter-result-container">
						<Container className="home-professor-result-container">
							<div className="home-professor-row1">
								<p clasName="home-professor-student-name"><b>{student.firstName} {student.lastName} </b></p>
								<Button href="/newrecommend" 
								variant="outline-dark" 
								className="home-professor-btn3">Recommend</Button>
							</div>
							<div className="home-professor-row2">
								<p className="home-professor-student-major"><b>Major -</b> {student.major}</p>
								<Button
								className="home-professor-btn4" 
								href={`${API_BASE}/resume?userId=${student.userId}`}>Download Resume</Button>
							</div>
						</Container>
					</Container>)}
			</div>}
		</div>
	);
}

export default HomeProfessor;
