import "./Login.css"
import React, { useState } from 'react'
import axios from 'axios'
import API_BASE from '../config/config'

import HomeNavbar from "../../components/HomeNavbar";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [member, setMember] = useState('');

	// const [firstName, setFirstName] = useState('')

	function handleData(userData) {
		checkType(userData.accountType);
		console.log(userData.account[0]);

		switch (userData.accountType) {
			case 'student':
				localStorage.setItem('userType', userData.accountType);
				localStorage.setItem('userId', userData.account[0].userId);
				localStorage.setItem('firstName', userData.account[0].firstName);
				localStorage.setItem('lastName', userData.account[0].lastName);
				localStorage.setItem('studentSFSUId', userData.account[0].studentSFSUId);
				localStorage.setItem('major', userData.account[0].major);
				localStorage.setItem('email', userData.account[0].email);
				localStorage.setItem('password', userData.account[0].password);
				localStorage.setItem('disabilityStatus', userData.account[0].disabilitystatus);
				localStorage.setItem('ethnicity', userData.account[0].ethnicity);
				localStorage.setItem('financialAidStatus', userData.account[0].financialAidStatus);
				localStorage.setItem('firstGeneration', userData.account[0].firstGeneration);
				localStorage.setItem('gender', userData.account[0].gender);
				localStorage.setItem('lgbtqStatus', userData.account[0].lgbtqStatus);
				localStorage.setItem('veteranStatus', userData.account[0].veteranStatus);
				break;
			case 'professor':
				localStorage.setItem('userType', userData.accountType);
				localStorage.setItem('userId', userData.account[0].userId);
				break;
			case 'recruiter':
				localStorage.setItem('userType', userData.accountType);
				localStorage.setItem('userId', userData.account[0].userId);
				break;
		}
	}

	function checkType(userType) {
		return setMember(userType);
	}



	const handleClick = (e) => {
		e.preventDefault();
		console.log('The button was clicked.');
		console.log(email);
		console.log(password);

		axios.post(`${API_BASE}/signin`, {
			email: email,
			password: password,
		})
			.then(response =>
				handleData(response.data)
			)
			.catch(error => console.log(error))
	}

	switch (member) {
		case 'student':
			window.location = '/home-student'
			break;
		case 'professor':
			window.location = '/home-professor'
			break;
		case 'recruiter':
			window.location = '/home-recruiter'
			break;
	}

	console.log(member);

	return (
		<div className="login">
			<HomeNavbar />

			<Container className="login-container">
				<Row className="login-row">
					<Col className="left-side-login"></Col>
					<Col className="right-side-login">
						<h1 className="login-h1"><b>Sign In</b></h1>

						<Form className="login-form">
							<Form.Group controlId="formGroupEmail">
								<Form.Control type="email" placeholder="Email"
									onChange={e => setEmail(e.target.value)} />
							</Form.Group>

							<Form.Group controlId="formGroupPassword">
								<Form.Control type="password" placeholder="Password"
									onChange={e => setPassword(e.target.value)} />
							</Form.Group>

							<Button variant="outline-dark" onClick={handleClick}>Login</Button>

							<br />
							{email} <br />
							{password}
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Login;