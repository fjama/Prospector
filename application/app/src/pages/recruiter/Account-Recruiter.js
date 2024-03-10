import "./Account-Recruiter.css"
import RecruiterNavbar from "../../components/RecruiterNavbar";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const RecruiterAccount = () => {
	return (
		<div className="account">
			<RecruiterNavbar />

			<h1 className="account-h1">Recruiter Account</h1>
			<Container className="account-container">
				<Row className="account-row">
					<Col>Name: John Doe</Col>
				</Row>

				<Row className="account-row">
					<Col>Company Role: Talent Specialist</Col>
				</Row>

				<Row className="account-row">
					<Col>Company Name: John Doe</Col>
				</Row>

				<Row className="account-row">
					<Col>Location: HQ location</Col>
				</Row>

				<Row className="account-row">
					<Col>Email: johndoe@example.com</Col>
				</Row>

				<Row className="account-row">
					<Col>Password: ••••••••••••••</Col>
				</Row>

				<Button href="/edit-recruiter" variant="outline-dark" className="account-edit-delete">Edit</Button>
				<Button href="/delete" variant="outline-dark" className="account-edit-delete">Delete</Button>

				<Button href="/search" variant="outline-dark" className="account-student-btn">Create Post</Button>
				<Button href="#" variant="outline-dark" className="account-professor-btn">Show Search</Button>
			</Container>
		</div>
	);
}

export default RecruiterAccount;