import "./Edit-Student.css"
import StudentNavbar from "../../components/StudentNavbar";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

import React, { useState } from 'react';
import axios from 'axios';

import API_BASE from '../config/config'


const EditStudent = () => {

	const [firstName, setFirstName] = useState(localStorage.getItem('firstName'));
	const [lastName, setLastName] = useState(localStorage.getItem('lastName'));
	const [studentSFSUId, setStudentSFSUId] = useState(localStorage.getItem('studentSFSUId'));
	const [major, setMajor] = useState(localStorage.getItem('major'));
	const [email, setEmail] = useState(localStorage.getItem('email'));
	const [password, setPassword] = useState(localStorage.getItem('password'));

	const [genderValue, setGenderValue] = useState(localStorage.getItem('gender'));
	const [lgbtqValue, setLgbtqValue] = useState(localStorage.getItem('lgbtqStatus'));
	const [ethnicityValue, setEthnicityValue] = useState(localStorage.getItem('ethnicity'));
	const [veteranValue, setVeteranValue] = useState(localStorage.getItem('veteranStatus'));
	const [disabilityValue, setDisabilityValue] = useState(localStorage.getItem('disabilityStatus'));
	const [firstgenValue, setFirstgenValue] = useState(localStorage.getItem('firstGeneration'));
	const [fasfaValue, setFasfaValue] = useState(localStorage.getItem('financialAidStatus'));
	// const [Vpassword, setPassword] = useState(localStorage.getItem('password'));

	const [passwordText, setPasswordText] = useState('');
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		event.preventDefault();

		if (form.checkValidity() === false) {
			event.stopPropagation();
		}

		// if (password != Vpassword) {
		// 	event.stopPropagation();
		// 	setPasswordText("Passwords do not match");
		// } else {
		// 	setPasswordText('');
		// }

		setValidated(true);

		axios.post(`${API_BASE}/update/student`, {
			userId: localStorage.getItem('userId'),
			email: email,
			password: 'csc648',
			studentSFSUId: studentSFSUId,
			firstName: firstName,
			lastName: lastName,
			addressId: 1,
			ethnicity: ethnicityValue,
			major: major,
			gender: genderValue,
			veteranStatus: veteranValue,
			lgbtqStatus: lgbtqValue,
			financialAidStatus: fasfaValue,
			disabilityStatus: disabilityValue,
			firstGeneration: firstgenValue,
		})
			.then(response => 
				window.location = '/account-student'
			)
			.catch(error => {
				console.log(error)
			});
};

	return (
		<div className="edit">
			<StudentNavbar />
			
			<h1 className="account-h1"><b>Edit Account</b></h1>
			<Form className="account-container" noValidate validated={validated} onSubmit={handleSubmit}>
				<Row className="edit-row">
					<Form.Control type="text" value={firstName} className="edit-row" onChange={e => setFirstName(e.target.value)}/>
				</Row>
				<Row className="edit-row">
					<Form.Control type="text" value={lastName} className="edit-row" />
				</Row>

				<Row className="edit-row">
					<Form.Control type="number" value={studentSFSUId} className="edit-row" />
				</Row>

				<Row className="edit-row">
					<Form.Control type="text" value={major} className="edit-row" />
				</Row>

				<Row className="edit-row">
					<Form.Control type="text" value="Spring 2021" className="edit-row" />
				</Row>

				<Row className="edit-row">
					<Form.Control type="email" value={email} className="edit-row" />
				</Row>

				{/* <Row className="edit-row">
					<Form.Control type="password" value={password} className="edit-row" />
				</Row> */}
				<Button className="edit-professor-btn" type="submit">Update</Button>
			</Form>
		</div>
	);
}

export default EditStudent;