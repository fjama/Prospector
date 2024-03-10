import "./Signup-Professor.css"
import { Redirect } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import HomeNavbar from "../../components/HomeNavbar";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

import API_BASE from "../config/config"

const SignUpProfessor = () => {

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [university, setUniversity] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [Vpassword, setVPassword] = useState('');

	const [passwordText, setPasswordText] = useState('');
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		event.preventDefault();

		if (form.checkValidity() === false) {
			event.stopPropagation();
		}

		if (password != Vpassword) {
			event.stopPropagation();
			setPasswordText("Passwords do not match");
		} else {
			setPasswordText('');
		}

		setValidated(true);

		axios.post(`${API_BASE}/signup/professor`, {
			email: email,
			password: password,
			firstName: firstName,
			lastName: lastName,
			university: university
		})
			.then(response => {
				console.log(response)
				window.location = '/login'
			})
			.catch(error => {
				console.log(error)
			});
};

return (
	<div className="signup-professor-container">
		<HomeNavbar />

		<div className="signup-professor">
			<Form noValidate validated={validated} onSubmit={handleSubmit}>
				<h1 className="signup-professor-h1"><b>Sign Up As An Instructor</b></h1>

				<Form.Row>
					<Form.Group as={Col} md="6" controlId="validationCustom01">
						<Form.Control
							required
							type="text"
							placeholder="First name"
							onChange={e => setFirstName(e.target.value)}
							className="signup-professor-row"
						/>
					</Form.Group>

					<Form.Group as={Col} md="6" controlId="validationCustom02">
						<Form.Control
							required
							type="text"
							placeholder="Last name"
							onChange={e => setLastName(e.target.value)}
							className="signup-professor-row"
						/>
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col} md="12" controlId="validationCustom03">
						<Form.Control
							required
							type="text"
							placeholder="University"
							onChange={e => setUniversity(e.target.value)}
							className="signup-professor-row"
						/>
						<Form.Control.Feedback type="invalid">
							Please enter university name.
          		</Form.Control.Feedback>
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col} md="12" controlId="validationCustom04">
						<Form.Control
							required
							type="email"
							placeholder="Email"
							onChange={e => setEmail(e.target.value)}
							className="signup-professor-row"
						/>
						<Form.Control.Feedback type="invalid">
							Please input a valid email.
          		</Form.Control.Feedback>
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col} md="6" controlId="validationCustom05">
						<Form.Control
							required
							type="password"
							placeholder="Password"
							onChange={e => setPassword(e.target.value)}
							className="signup-professor-row"
						/>
						<p className="passwordText">{passwordText}</p>
					</Form.Group>

					<Form.Group as={Col} md="6" controlId="validationCustom06">
						<Form.Control
							required
							type="password"
							placeholder="Confirmation Password"
							onChange={e => setVPassword(e.target.value)}
							className="signup-professor-row"
						/>
						<p className="passwordText">{passwordText}</p>
					</Form.Group>
				</Form.Row>

				<Button className="signup-professor-btn" type="submit">Submit form</Button>
			</Form>
		</div>
	</div>
);
}

export default SignUpProfessor;