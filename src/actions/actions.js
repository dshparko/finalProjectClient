import axios from 'axios'

export const send = async ( userName,time, reviewTitle, workTitle, text, teg, group, starCount, imgUrl) => {
    try {
        const response = await axios.post(`http://localhost:5000/auth/send`, {
             userName, time, reviewTitle, workTitle, text, teg, group, starCount, imgUrl
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const sendComment = async ( userName, time, text) => {
    try {
        const response = await axios.post(`http://localhost:5000/auth/sendComment`, {
            userName,time,text
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}


export const likePost = async (id, username) => {
    try {
        await axios.patch(`http://localhost:5000/auth/likepost/${id}`, {
            username
        })
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const dislikePost = async (id, username) => {
    try {
        await axios.patch(`http://localhost:5000/auth/likepost/${id}`, {
            username
        })
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const rateWork = async (id, username) => {
    try {
        await axios.patch(`http://localhost:5000/auth/likepost/${id}`, {
            username
        })
    } catch (e) {
        alert(e.response.data.message)
    }
}