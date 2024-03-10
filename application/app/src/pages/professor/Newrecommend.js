import "./Newrecommend.css";
import React, { useState } from 'react'
import axios from 'axios'
import API_BASE from '../config/config'

import ProfessorNavbar from "../../components/ProfessorNavbar";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactRating from 'react-rate-thing'

const NewRecommend = () => {
	// declare variables
	const [studentSFSUId, setStudentSFSUId] = useState(912345670);
	const [professorId, setProfessorId] = useState(5);
	const [students, setAggregateRating] = React.useState([]);
	const [rating, setRatingValue] = useState(0);
	const [recommendationText, setRecommendationText] = useState('');
	
	//functiion to save elected rating 
	const handleStarRating = rating => (setRatingValue(rating));
	
	//send recommendation to DB
	const handleClick = (e) => {
		e.preventDefault();
		console.log('The button was clicked.');
		console.log(recommendationText);
		console.log(rating);

		axios.post(`${API_BASE}/addrec`, {
			studentSFSUId: {studentSFSUId},
			professorId: {professorId},
			rating: {rating},
			recommendationText: {recommendationText}
		})
			.then(response => {
				console.log(response)
				students.map(rating => setAggregateRating(rating))
				window.location = '/viewrecommend'
			})
			.catch(error => {
				console.log(error)
				window.location = '/viewrecommend'
			});	
		
		console.log(students);
	};

	return (
		<div className="newRecommend">
			<ProfessorNavbar />
			<h1 className="newRecommend-h1"> Student Recommendation</h1>
			<Container className="newRecommend-container">
				<Row className="newRecommend-row">
					<Col className="newRecommend-font">Student Name: Syble Hamill</Col>
				</Row>
				<Row className="newRecommend-row">
					<Col className="newRecommend-font">Student ID: {studentSFSUId} </Col>
				</Row>

				<Form.Group controlId="Form.Recommend" className="newRecommend-form">
					<Form.Label className="newRecommend-label">Student Recommendation / Letter of Recommendation</Form.Label>
					<Form.Control 
						as="textarea" 
						rows={12}
						onChange={e => setRecommendationText(e.target.value)}
					/>
				</Form.Group>

				<div className="newRecommend-rating">
					<div className="newRecommend-rating-font">
						Student Overall Rating: {rating}
					</div>
					<ReactRating 
						value={rating}
						onClick={handleStarRating} 
					/>
				</div>

				<Form>
					<Button className="newRecommend-btn" onClick={handleClick}>Submit</Button>
				</Form>
			</Container>
		</div>

	);
}


export default NewRecommend;