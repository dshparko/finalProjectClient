import './App.css';
import Header from "./components/header/Header";
import React, { useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import Profile from "./pages/profile/Profile";

function App() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = () => {
            fetch("http://localhost:5000/auth/login/success", {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                },
            })
                .then((response) => {
                    if (response.status === 200) return response.json();
                    throw new Error("authentication has been failed!");
                })
                .then((resObject) => {
                    setUser(resObject.user);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        getUser();
    }, []);

    return (
        <Router>
            <Header user={user}/>
            <Routes>
                <Route path="/" element={<Main user={user}/> }/>

                <Route path="/login" element={<Login/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </Router>

    );
}

export default App;
