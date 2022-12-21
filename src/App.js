import './App.css';
import Header from "./components/header/Header";
import React, {Component} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import Profile from "./pages/profile/Profile";

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>

                <Route path="/login" element={<Login/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </Router>

    );
}

export default App;
