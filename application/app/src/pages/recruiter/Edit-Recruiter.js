import "./Edit-Recruiter.css"
import RecruiterNavbar from "../../components/RecruiterNavbar";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

const EditRecruiter = () => {
	return (
		<div className="edit">
			<RecruiterNavbar />

			<h1 className="account-h1"><b>Edit Account</b></h1>
			<Form className="account-container">
				<Row className="edit-row">
					<Form.Control type="text" placeholder="John" className="edit-row" />
				</Row>
				<Row className="edit-row">
					<Form.Control type="text" placeholder="Doe" className="edit-row" />
				</Row>

				<Row className="edit-row">
					<Form.Control type="uniName" placeholder="Talent Specialist" className="edit-row" />
				</Row>

				<Row className="edit-row">
					<Form.Control type="uniName" placeholder="John Doe" className="edit-row" />
				</Row>

				<Row className="edit-row">
					<Form.Control type="email" placeholder="HQ location" className="edit-row" />
				</Row>

				<Row className="edit-row">
					<Form.Control type="password" placeholder="johndoe@example.com" className="edit-row" />
				</Row>

				<Row className="edit-row">
					<Form.Control type="lname" placeholder="New Password" className="edit-row" />
				</Row>
				<Button href="/account-recruiter" className="edit-professor-btn">Update</Button>
			</Form>
		</div>
	);
}

export default EditRecruiter;