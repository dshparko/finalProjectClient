import {Button, Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Login from "../../pages/login/Login";
import {useNavigate} from "react-router-dom";


function Header() {

    const navigate = useNavigate();

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand className="font-weight-bold navbar-brand " href="/">FinalProject</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                    </Nav>
                    <Form className="d-flex me-4 my-2 my-lg-0">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-1"
                            aria-label="Search"
                        />
                        <Button variant="outline-success"><i className="bi bi-search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </i>
                        </Button>
                    </Form>

                    <Button
                        onClick={() => navigate('/login')} variant="outline-success">Log in</Button>

                    <img
                        src="https://sun9-18.userapi.com/impg/sWsDbdTZDArFG8IFYSrYtZPnC567A7ER8d7Rrw/L0zbURtLvJs.jpg?size=1440x2160&quality=95&sign=197b07a42c704a9069aebcb78fa69df6&type=album"
                        alt="avatar" className="avatar"/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;