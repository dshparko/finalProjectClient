import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {Theme} from "dark-mode-react";
import Google from "../../components/img/moon-stars.svg";
import Github from "../../components/img/moon-stars-fill.svg";
import {useState} from "react";
import {BsFillMoonStarsFill} from 'react-icons/bs'
import useLocalStorage from 'use-local-storage'

function Header(props) {
    const {user,onDark} = props;
    const logout = () => {
        window.open("https://final-project-server-rosy.vercel.app//auth/logout", "_self");
    };
    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState(false);

    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }



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
                    <ul class="navbar-nav  mb-3 mb-lg-0">
                        <li className="nav-item">
                        <Theme
                            darkIcon={Google}
                            lightIcon={Github
                            }
                            altDark='dark icon'
                            altLight="light icon"
                            imgWidth='30'
                            imgHeight='30'
                            myClass="your-class_name"
                        />
                    </li>
                        <li className="nav-item">
                            <a className="nav-link"  href="/games">Игры</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/films">Кино</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/music">Музыка</a>

                        </li>

                    </ul>
                    {/*<Form className="d-flex me-4 my-2 my-lg-0">*/}
                    {/*    <Form.Control*/}
                    {/*        type="search"*/}
                    {/*        placeholder="Искать.."*/}
                    {/*        className="me-1"*/}
                    {/*        aria-label="Search"*/}
                    {/*        onChange={setSearch}*/}
                    {/*    />*/}
                    {/*    <Button onClick={setSearch} variant="outline-success">*/}

                    {/*        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
                    {/*             className="bi bi-search" viewBox="0 0 16 16">*/}
                    {/*            <path*/}
                    {/*                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>*/}
                    {/*        </svg>*/}

                    {/*    </Button>*/}
                    {/*</Form>*/}

                    {/*<Theme*/}
                    {/*    darkIcon={Google}*/}
                    {/*    lightIcon={Github*/}
                    {/*    }*/}
                    {/*    altDark='dark icon'*/}
                    {/*    altLight="light icon"*/}
                    {/*    imgWidth='30'*/}
                    {/*    imgHeight='30'*/}
                    {/*    myClass="your-class_name"*/}
                    {/*/>*/}
                    {/*<BsFillMoonStarsFill className=' cursor-pointer text-xl dark:text-slate-50' onClick={onDark}/>*/}
                    {user ? (<>
                            <a href='/profile'>
                                <img
                                    src={user.photos[0].value}
                                    alt="avatar"
                                    className="avatar"
                                />
                            </a>
                            <Button
                                onClick={logout} variant="outline-success">Выйти</Button>


                        </>

                    ) : (
                        <Button
                            onClick={() => navigate('/login')} variant="outline-success">Log in</Button>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;