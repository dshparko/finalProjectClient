import axios from 'axios'

export const send = async (userName,time, reviewTitle, workTitle, text, teg, group, starCount, imgUrl) => {
    try {
        const response = await axios.post(`http://localhost:5000/auth/send`, {
            userName, time, reviewTitle, workTitle, text, teg, group, starCount, imgUrl
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}
