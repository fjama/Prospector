import "./ViewRecommend.css";
import { Link } from "react-router-dom";
import ProfessorNavbar from "../../components/ProfessorNavbar";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const ViewRecommends = () => {
	return (
		<div className="viewRecommends">
			<ProfessorNavbar />

			<h1 className="viewRecommends-h1">Recommendations</h1>
			<Button href="/home-professor" variant="outline-dark" className="viewRecommends-btn">Search Students</Button>
			<Form className="viewRecommends-form">
				<Row className="viewRecommends-row">
					<Col className="viewRecommends-col">
						<h3 className="viewRecommends-col">Student Name: John Doe</h3>
						<h3 className="viewRecommends-col">Student ID: 123456789 </h3>
						<h3 className="viewRecommends-col">Major: Null</h3>
					</Col>

					<Col className="viewRecommends-col">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has survived not only five centuries.
                        <h3 className="viewRecommends-col">Student Overall Rating: 5</h3>
						<Link to="/newrecommend" variant="outline-dark" className="viewRecommends-edit-btn">Edit</Link>
					</Col>
				</Row>
			</Form>

			<Form className="viewRecommends-form">
				<Row className="viewRecommends-row">
					<Col className="viewRecommends-col">
						<h3 className="viewRecommends-col">Student Name: Jane Doe</h3>
						<h3 className="viewRecommends-col">Student ID: 987654321 </h3>
						<h3 className="viewRecommends-col">Major: Null</h3>
					</Col>

					<Col className="viewRecommends-col">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has survived not only five centuries.
                        <h3 className="viewRecommends-col">Student Overall Rating: 2</h3>
						<Link to="/newrecommend" variant="outline-dark" className="viewRecommends-edit-btn">Edit</Link>
					</Col>
				</Row>
			</Form>

			<Form className="viewRecommends-form">
				<Row className="viewRecommends-row">
					<Col className="viewRecommends-col">
						<h3 className="viewRecommends-col">Student Name: Richard Roe</h3>
						<h3 className="viewRecommends-col">Student ID: 012345678 </h3>
						<h3 className="viewRecommends-col">Major: Null</h3>
					</Col>

					<Col className="viewRecommends-col">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has survived not only five centuries.
                        <h3 className="viewRecommends-col">Student Overall Rating: 4</h3>
						<Link to="/newrecommend" variant="outline-dark" className="viewRecommends-edit-btn">Edit</Link>
					</Col>
				</Row>
			</Form>
		</div>

	);
}

export default ViewRecommends;