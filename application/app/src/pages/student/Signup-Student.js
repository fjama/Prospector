import "./Signup-Student.css"
import { Redirect } from 'react-router-dom'
import HomeNavbar from "../../components/HomeNavbar";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'

import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import bsCustomFileInput from "bs-custom-file-input"

import gender from "../../components/categories/gender.json";
import lgbtq from "../../components/categories/lgbtq.json";
import ethnicity from "../../components/categories/ethnicity.json";
import veteran from "../../components/categories/veteran.json";
import disability from "../../components/categories/disability.json";
import firstgen from "../../components/categories/firstgen.json";
import fasfa from "../../components/categories/fasfa.json";

import API_BASE from '../config/config'

const SignupStudent = () => {

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [studentId, setStudentId] = useState('');
	const [major, setMajor] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [Vpassword, setVPassword] = useState('');

	const [genderValue, setGenderValue] = useState('default');
	const [lgbtqValue, setLgbtqValue] = useState('default');
	const [ethnicityValue, setEthnicityValue] = useState('default');
	const [veteranValue, setVeteranValue] = useState('default');
	const [disabilityValue, setDisabilityValue] = useState('default');
	const [firstgenValue, setFirstgenValue] = useState('default');
	const [fasfaValue, setFasfaValue] = useState('default');

	const [validated, setValidated] = useState(false);
	const [passwordText, setPasswordText] = useState('');

	const [fileName, setFileName] = useState("Upload Resume");

	const handleChangeGender = e => { setGenderValue(e.value); }
	const handleChangeLgbtq = e => { setLgbtqValue(e.value); }
	const handleChangeEthnicity = e => { setEthnicityValue(e.value); }
	const handleChangeVeteran = e => { setVeteranValue(e.value); }
	const handleChangeDisability = e => { setDisabilityValue(e.value); }
	const handleChangeFirstgen = e => { setFirstgenValue(e.value); }
	const handleChangeFasfa = e => { setFasfaValue(e.value); }

	const submitForm = () => {
		const formData = new FormData();
		formData.append("resume", fileName);
		formData.append("userId", studentId)

		axios.post(`${API_BASE}/upload`, formData)
			.then((res) => {
				alert("File Upload success");
				window.location = '/login'
			})
			.catch((err) => alert("File Upload Error"));
	};

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

		axios.post(`${API_BASE}/signUp/student`, {
			email: email,
			password: password,
			studentSFSUId: studentId,
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
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			});

		submitForm();
	};

	return (
		<div>
			<HomeNavbar />

			<div className="signup-student">
				<Form noValidate validated={validated} onSubmit={handleSubmit} className="signup-student-form">
					<h1 className="signup-student-h1"><b>Sign Up As Student</b></h1>

					<Form.Row>
						<Form.Group as={Col} md="6" controlId="validationCustom01">
							<Form.Control
								required
								type="text"
								placeholder="First name"
								onChange={e => setFirstName(e.target.value)}
								className="signup-student-row"
							/>
						</Form.Group>

						<Form.Group as={Col} md="6" controlId="validationCustom02">
							<Form.Control
								required
								type="text"
								placeholder="Last name"
								onChange={e => setLastName(e.target.value)}
								className="signup-student-row"
							/>
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} md="6" controlId="validationCustom03">
							<Form.Control
								required
								type="number"
								placeholder="Student Id"
								onChange={e => setStudentId(e.target.value)}
								className="signup-student-row"
							/>
						</Form.Group>

						<Form.Group as={Col} md="6" controlId="validationCustom04">
							<Form.Control
								required
								type="text"
								placeholder="Major"
								onChange={e => setMajor(e.target.value)}
								className="signup-student-row"
							/>
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} md="12" controlId="validationCustom05">
							<Form.Control
								required
								type="email"
								placeholder="Email"
								onChange={e => setEmail(e.target.value)}
								className="signup-student-row"
							/>
							<Form.Control.Feedback type="invalid">
								Please input a valid email.
							</Form.Control.Feedback>
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} md="6" controlId="validationCustom06">
							<Form.Control
								required
								type="password"
								placeholder="Password"
								onChange={e => setPassword(e.target.value)}
								className="signup-student-row"
							/>
							<p className="passwordText">{passwordText}</p>
						</Form.Group>

						<Form.Group as={Col} md="6" controlId="validationCustom07">
							<Form.Control
								required
								type="password"
								placeholder="Confirmation Password"
								onChange={e => setVPassword(e.target.value)}
								className="signup-student-row"
							/>
							<p className="passwordText">{passwordText}</p>
						</Form.Group>
					</Form.Row>

					<h2 className="eeo-h2"><p>Equal Employment Opportunity (EEO)</p></h2>
					<p className="eeo-paragraph">This section is intended to help companies comply with federal law and
					strengthen diversity recruiting efforts. Please select ‘prefer not to say’
                    in the (dropdown menu) if you do not wish to answer these questions. </p>

					<Row className="signup-student-row-eeo">
						<Col>
							<Form.Label className="form-label">Gender</Form.Label>
							<Select
								placeholder="--"
								options={gender} // set list of the data
								onChange={handleChangeGender} // assign onChange function
								value={gender.find(obj => obj.value === genderValue)} // set selected value
								as={InputGroup.Prepend}
								variant="outline-secondary"
								id="input-group-dropdown1"
								className="dropdown"
							/>
						</Col>
						<Col>
							<Form.Label className="form-label">LGBTQ</Form.Label>
							<Select
								placeholder="--"
								options={lgbtq} // set list of the data
								onChange={handleChangeLgbtq} // assign onChange function
								value={lgbtq.find(obj => obj.value === lgbtqValue)} // set selected value
								as={InputGroup.Prepend}
								variant="outline-secondary"
								id="input-group-dropdown1"
								className="dropdown"
							/>
						</Col>
					</Row>

					<Row className="signup-student-row-eeo">
						<Col>
							<Form.Label className="form-label">Ethnicity (select best fit)</Form.Label>
							<Select
								placeholder="--"
								options={ethnicity} // set list of the data
								onChange={handleChangeEthnicity} // assign onChange function
								value={ethnicity.find(obj => obj.value === ethnicityValue)} // set selected value
								as={InputGroup.Prepend}
								variant="outline-secondary"
								id="input-group-dropdown1"
								className="dropdown"
							/>
						</Col>
						<Col>
							<Form.Label className="form-label">Veteran</Form.Label>
							<Select
								placeholder="--"
								options={veteran} // set list of the data
								onChange={handleChangeVeteran} // assign onChange function
								value={veteran.find(obj => obj.value === veteranValue)} // set selected value
								as={InputGroup.Prepend}
								variant="outline-secondary"
								id="input-group-dropdown1"
								className="dropdown"
							/>
						</Col>
					</Row>

					<Row className="signup-student-row-eeo">
						<Col>
							<Form.Label className="form-label">Disability</Form.Label>
							<Select
								placeholder="--"
								options={disability} // set list of the data
								onChange={handleChangeDisability} // assign onChange function
								value={disability.find(obj => obj.value === disabilityValue)} // set selected value
								as={InputGroup.Prepend}
								variant="outline-secondary"
								id="input-group-dropdown1"
								className="dropdown"
							/>
						</Col>

						<Col>
							<Form.Label className="form-label">Received Financial Aid?</Form.Label>
							<Select
								placeholder="--"
								options={fasfa} // set list of the data
								onChange={handleChangeFasfa} // assign onChange function
								value={fasfa.find(obj => obj.value === fasfaValue)} // set selected value
								as={InputGroup.Prepend}
								variant="outline-secondary"
								id="input-group-dropdown1"
								className="dropdown"
							/>
						</Col>
					</Row>

					<Row className="signup-student-row-eeo">
						<Col>
							<Form.Label className="form-label">Are you a first generation college student?</Form.Label>
							<Select
								placeholder="--"
								options={firstgen} // set list of the data
								onChange={handleChangeFirstgen} // assign onChange function
								value={firstgen.find(obj => obj.value === firstgenValue)} // set selected value
								as={InputGroup.Prepend}
								variant="outline-secondary"
								id="input-group-dropdown1"
								className="dropdown"
							/>
						</Col>

						<Col>
							<Form.Group as={Row}>
								<Form.File
									type="file"
									// className="custom-file-label"
									id="inputGroupFile01"
									label={fileName}
									onChange={(e) => setFileName(e.target.files[0].name)}
									custom
								/>
							</Form.Group>
						</Col>
					</Row>

					<Button className="signup-student-btn" type="submit">Submit</Button>
				</Form>
			</div >
		</div >
	);
}

export default SignupStudent;