import AddPostField from "../../components/AddPostField";
import Post from "../../components/post/Post";
import {useEffect, useState} from "react";
import axios from 'axios'
function Main({user}) {

    const [data, setData] = useState([])

    const [updateState, setUpdateState] = useState(0)
    const getAll = async () => {
        try {
            let arr = []
            const res = await axios.get(`http://localhost:5000/auth/allmessages`)

            arr.unshift(res.data)
            setData(...arr)
            return res.data

        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {

        const interval = setInterval(() => {
            getAll()
            console.log('hey');
        }, 3000);
        return () => clearInterval(interval);
    }, [updateState])

    return (
        <div className="p-2  justify-content-center ">
            <AddPostField user = {user}/>
            {data.length>0?(
                    <div>
                        {data.map((item, index) =>
                            <Post user = {user} item={item}  />
                            //<h1>{item.userName}</h1>

                        )}
                    </div>)
                :
                (<h1>lsdlds</h1>)}
        </div>
    )
}

export default Main;