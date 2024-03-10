import "./Account-Student.css"
import StudentNavbar from "../../components/StudentNavbar";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import React, { useState } from 'react';

import axios from 'axios'

import API_BASE from '../config/config'

const StudentAccount = () => {

	const firstName = localStorage.getItem('firstName');
	const studentSFSUId = localStorage.getItem('studentSFSUId');
	const major = localStorage.getItem('major');
	const email = localStorage.getItem('email');

	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		event.preventDefault();

		let formData = new FormData();
		var resumefile = document.querySelector('#file');
		formData.append("resume", resumefile.files[0]);
		formData.append("userId", studentSFSUId)
		axios.post(`${API_BASE}/upload`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
			.then(response => {
				window.location = '/login'
			})
			.catch(error => {
				console.log(error)
			});
	};

	return (
		<div className="account-student">
			<StudentNavbar />

			<h1 className="account-h1">Student Account</h1>
			<Container className="account-container">
				<Row className="account-row">
					<Col>Name: {firstName}</Col>
				</Row>

				<Row className="account-row">
					<Col>Student ID: {studentSFSUId}</Col>
				</Row>

				<Row className="account-row">
					<Col>Major: {major}</Col>
				</Row>

				<Row className="account-row">
					<Col>Graduation Year: Spring 2021</Col>
				</Row>

				<Row className="account-row">
					<Col>Email: {email}</Col>
				</Row>

				<Row className="account-row">
					<Col>Password: ••••••••••••••</Col>
				</Row>

				<Button href="/edit-student" variant="outline-dark" className="account-edit-delete">Edit</Button>
				<Button href="/delete-student" variant="outline-dark" className="account-edit-delete">Delete</Button>

				<Form noValidate validated={validated} onSubmit={handleSubmit} className="signup-student-form">
					<Row>
						<Col>
							<input type="file" id="file" />
						</Col>
					</Row>

					<Button className="signup-student-btn" type="submit">Upload</Button>
				</Form>
				{/* <Button href="#" variant="outline-dark" className="account-student-btn">Upload EEO</Button> */}

			</Container>
		</div>
	);
}

export default StudentAccount;