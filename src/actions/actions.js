import axios from 'axios'

export const send = async (reviewTitle, workTitle, text, teg, group, starCount) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/send`, {
            reviewTitle, workTitle, text, teg, group, starCount
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}
