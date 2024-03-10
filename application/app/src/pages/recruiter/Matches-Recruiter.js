import "./Matches-Recruiter.css"
import RecruiterNavbar from "../../components/RecruiterNavbar";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const MatchesRecruiter = () => {
	return (
		<div className="matches-recruiter">
			<RecruiterNavbar />

			<h1 className="matches-recruiter-h1">Matches</h1>
			<Container className="matches-recruiter-container1">
				<p className="matches-recruiter-p">You are matched with </p>
				<h2 className="matches-recruiter-h2">Student Name</h2>

				<Row className="matches-recruiter-row1">
					<Button href="#" variant="outline-dark" className="matches-recruiter-btn1">Not Interested</Button>
					<Button href="#" variant="outline-dark" className="matches-recruiter-btn2">Connect</Button>
				</Row>
			</Container>

			<Container className="matches-recruiter-container1">
				<p className="matches-recruiter-p">You are matched with</p>
				<h2 className="matches-recruiter-h2">Student Name</h2>

				<Row className="matches-recruiter-row1">
					<Button href="#" variant="outline-dark" className="matches-recruiter-btn1">Not Interested</Button>
					<Button href="#" variant="outline-dark" className="matches-recruiter-btn2">Connect</Button>
				</Row>
			</Container>

			<Container className="matches-recruiter-container1">
				<p className="matches-recruiter-p">You are matched with</p>
				<h2 className="matches-recruiter-h2">Student Name</h2>

				<Row className="matches-recruiter-row1">
					<Button href="#" variant="outline-dark" className="matches-recruiter-btn1">Not Interested</Button>
					<Button href="#" variant="outline-dark" className="matches-recruiter-btn2">Connect</Button>
				</Row>
			</Container>


			<h1 className="matches-recruiter-h1">Saved Searches</h1>
			<Container className="matches-recruiter-container2">
				<Col>
					<h3 className="matches-recruiter-p">Major: Null</h3>
					<h3 className="matches-recruiter-p">Gender: Null </h3>
					<h3 className="matches-recruiter-p">Ethnicity: Null</h3>
				</Col>

				<Row className="matches-recruiter-row2">
					<Button href="#" variant="outline-dark" className="matches-recruiter-btn3">Edit</Button>
					<Button href="#" variant="outline-dark" className="matches-recruiter-btn2">Remove</Button>
				</Row>
			</Container>
		</div>
	);
}

export default MatchesRecruiter;