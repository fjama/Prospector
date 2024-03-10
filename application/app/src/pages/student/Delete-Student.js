import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import axios from 'axios'
import API_BASE from '../config/config'
import StudentNavbar from "../../components/StudentNavbar";

const StudentDelete = () => {

  const userType = localStorage.getItem('userType');
  const userId = localStorage.getItem('userType');

  const handleClick = () => {
    console.log('The button was clicked.');

    axios.post(`${API_BASE}/delete/student`, {
      userId: userId
    })
      .then(response =>
        console.log(response.data)
      )
      .catch(error => console.log(error))
  }

  return (
    <div>
      <StudentNavbar />
      <div className="delete">
        <h1>Are You Sure?</h1>
        <Form>
          <Button variant="outline-light" onClick={handleClick()}>Yes</Button>
          <Button href="/student-account" variant="outline-light">No</Button>
        </Form>
      </div>
    </div>
  );
}

export default StudentDelete;