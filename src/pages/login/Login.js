import Google from "../../components/img/google.png";
import Github from "../../components/img/github.png";
import {Button} from "react-bootstrap";

const Login = () => {
    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };

    const github = () => {
        window.open("http://localhost:5000/auth/github", "_self");
    };


    return (
        <div className="login">
            <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">


                    <Button onClick={google} variant="outline-success loginButton google">
                        <img src={Google} alt="" className="icon"/>
                        Google
                    </Button>
                    <Button onClick={github} variant="outline-success loginButton github">
                        <img src={Github} alt="" className="icon"/>
                        Github
                    </Button>

                </div>
                <div className="center">
                    <div className="line"/>
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder="Username"/>
                    <input type="text" placeholder="Password"/>
                    <button className="submit">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;