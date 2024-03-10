import "./Account-Professor.css"
import ProfessorNavbar from "../../components/ProfessorNavbar";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const ProfessorAccount = () => {
	return (
		<div className="account">
			<ProfessorNavbar />

			<h1 className="account-h1">Instructor Account</h1>
			<Container className="account-container">
				<Row className="account-row">
					<Col>Name: John Doe</Col>
				</Row>

				<Row className="account-row">
					<Col>University Role: Professor</Col>
				</Row>

				<Row className="account-row">
					<Col>University Name: Example University</Col>
				</Row>

				<Row className="account-row">
					<Col>Location: city</Col>
				</Row>

				<Row className="account-row">
					<Col>Email: johndoe@example.edu</Col>
				</Row>

				<Row className="account-row">
					<Col>Password: ••••••••••••••</Col>
				</Row>

				<Button href="/edit-professor" variant="outline-dark" className="account-edit-delete">Edit</Button>
				<Button href="/delete" variant="outline-dark" className="account-edit-delete">Delete</Button>

				<Button href="/viewrecommend" variant="outline-dark" className="account-professor-btn">View Recommedations</Button>
			</Container>
		</div>
	);
}

export default ProfessorAccount;
