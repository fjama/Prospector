import HomeNavbar from "./HomeNavbar";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Delete = () =>{
    return(
        <div>
            <HomeNavbar />
            <div className="delete">
                <h1>Are You Sure?</h1>
                <Form>
                    <Button href="/home" variant="outline-light">Yes</Button>
                    <Button href="/home" variant="outline-light">No</Button>
                </Form>
            </div>
        </div>    
    );
}

export default Delete;