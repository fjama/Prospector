import "./Home-Recruiter.css";
import "../styles/Design.css";
import data from "../../components/categories/dropdownData.json";
import RecruiterNavbar from "../../components/RecruiterNavbar";

import React, { useState } from 'react'
import Select from 'react-select'
import axios from 'axios'

import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

import API_BASE from '../config/config'

const HomeRecruiter = () => {

	const [selectedValue, setSelectedValue] = useState('default');
	const [searchValue, setSearchValue] = useState('default');
	const [active, setActive] = useState(false);
	const [students, setStudents] = React.useState([]);
	const [stuId, setStuId] = useState(912345670);
	const [pdfLink, setPdfLink] = useState('./john-doe.pdf');

	// handle onChange event of the dropdown
	const handleChange = (e) => {
		setSelectedValue(e.value);
	}

	// const getResume = (userId) => {
	// 	axios.get(`${API_BASE}/resume`, {
	// 		userId: userId,
	// 	})
	// 		.then(response => {
	// 			console.log(response)
	// 			window.location = `${API_BASE}/resume?userId=${userId}`
	// 		})
	// 		.catch(error => {
	// 			console.log(error)
	// 		});
	// }

	const handleClick = (e) => {
		e.preventDefault();
		console.log('The button was clicked.');
		setActive(true); // results will now be visible

		if (selectedValue != "default" && searchValue == "default") {
			// if dropdown is selected and search is empty
			alert("Search bar is empty!");
		} else {
			axios.get(`${API_BASE}/search/${selectedValue}/text/${searchValue}`)
				.then(response => {
					setStudents(response.data)
					console.log(response)
				})
				.catch(error => {
					console.log(error)
				});

			console.log(students);
		}
	}

	return (
		<div className="home-recruiter-search">
			<RecruiterNavbar />
			<Container>
				<h1 className="home-recruiter-page-title">Search</h1>
				<Row className="home-recruiter-search-row">
					<Col className="home-recruiter-search-col">
						<Select
							placeholder="Select Option"
							options={data} // set list of the data
							onChange={handleChange} // assign onChange function
							value={data.find(obj => obj.value === selectedValue)} // set selected value
							as={InputGroup.Prepend}
							variant="outline-secondary"
							id="input-group-dropdown1"
							className="home-recruiter-dropdown"
						/>
					</Col>

					<Col className="home-recruiter-search-col">
						{/* Search bar */}
						<FormControl aria-describedby="basic-addon1" placeholder="Search..."
							className="home-recruiter-search-bar" onChange={e => setSearchValue(e.target.value)} />
					</Col>

					<div className="home-recruiter-button-container">
						<Button type="submit"
							className="home-recruiter-btn3"
							onClick={console.log('save')}
						>Get Notified</Button>
					</div>

					<div className="home-recruiter-button-container">
						<Button type="submit" className="home-recruiter-btn1" onClick={handleClick}>Search</Button>
					</div>
				</Row>
			</Container>

			{/* 
				test values to show print
				<h1>{selectedValue}</h1>
				<h1>{searchValue}</h1> */}

			{active && <div style={{ marginTop: 20, lineHeight: '25px' }}>
				{students.map(student =>
					<Container key={student.userId} className="home-recruiter-outter-result-container">
						<Container className="home-recruiter-result-container">
							<div className="home-recruiter-row1">
								<p className="home-recruiter-student-name"><b>{student.firstName} {student.lastName} - </b> {student.aggregateRating} / 5 </p>
							</div>
							<div className="home-recruiter-row2">
								<p className="home-recruiter-student-info"><b>Major -</b> {student.major} <b>Gender -</b> {student.gender} <b>Ethnicity -</b> {student.ethnicity}</p>
								<Button
									href={`${API_BASE}/resume?userId=${student.userId}`}
									className="home-recruiter-btn2"
								>Download Resume</Button>
							</div>
						</Container>
					</Container>)}
			</div>}
		</div>
	);
}

export default HomeRecruiter;
