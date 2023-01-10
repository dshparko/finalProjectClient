import './App.css';
import Header from "./components/header/Header";
import React, { useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import Profile from "./pages/profile/Profile";
import i18n from "i18next";
import {useTranslation} from "react-i18next";
import Provider, { useDarkmodeContext } from 'react-use-dark-mode';
import axios from "axios";
import {render} from "react-dom";
function App() {
    const [data, setData] = useState([])

    const [tag, setTag] = useState([])
    const [updateState, setUpdateState] = useState(0)

    const getAll = async () => {
        try {
            let arr = []
            const res = await axios.get(`finalprojectserver-production.up.railway.app/auth/allmessages`)

            arr.unshift(res.data)
            setData(...arr)
            return res.data

        } catch (e) {
            console.log(e);
        }
    }

    const getAllTags = async () => {
        try {
            let arr = []
            const res = await axios.get(`finalprojectserver-production.up.railway.app/auth/allTags`)

            arr.unshift(res.data)
            setTag(...arr)
            return res.data

        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {

        const interval = setInterval(() => {
            getAll()
            getAllTags()
            console.log('hey');
            render();
        }, 3000);
        return () => clearInterval(interval);
    }, [updateState])

    const [user, setUser] = useState(null);
    const [search, setSearch] = useState(null);

    const [language, setLanguage] = useState('language', 'ru')
    const [darkMode, setDarkMode] = useState(false)

    const darkModeHandler = () => {
        if(darkMode){
            document.documentElement.classList.add('dark')
            setDarkMode(!darkMode)
        }
        else{
            document.documentElement.classList.remove('dark')
            setDarkMode(!darkMode)
        }

    }
    const sortedPosts = data.sort((a, b) => {
        return (a['starCount'] < b['starCount'] ? 1 : -1);
    })
    useEffect(() => {
        const getUser = () => {
            fetch("finalprojectserver-production.up.railway.app//auth/login/success", {
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


    const films = data.filter((a) => a['group'] == 0);
    const music = data.filter((a) => a['group'] == 1);
    const games = data.filter((a) => a['group'] == 2);
    const sortedFilms = films.sort((a, b) => {
        return (a['starCount'] < b['starCount'] ? 1 : -1);
    })
    const sortedMusic = music.sort((a, b) => {
        return (a['starCount'] < b['starCount'] ? 1 : -1);
    })
    const sortedGames = games.sort((a, b) => {
        return (a['starCount'] < b['starCount'] ? 1 : -1);
    })

    return (
        <Router>
            <Header user={user} onDark={darkModeHandler} language={language}/>
            <Routes>
                <Route path="/" element={<Main user={user} data={data} sortedPosts={sortedPosts} tag = {tag}/> }/>
                <Route path="/films" element={<Main user={user} data={films} sortedPosts={sortedFilms} tag = {tag}/> }/>
                <Route path="/music" element={<Main user={user} data={music} sortedPosts={sortedMusic} tag = {tag}/> }/>
                <Route path="/games" element={<Main user={user} data={games} sortedPosts={sortedGames} tag = {tag}/> }/>
                <Route path="/login" element={<Login/>}/>
                {user?   <Route path="/profile" element={<Profile user={user}/>}/>:<></>
                }
             </Routes>
        </Router>
    );
}

export default App;
