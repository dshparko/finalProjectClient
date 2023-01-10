import {useEffect, useState} from "react";
import axios from "axios";
import Post from "../../components/post/Post";

function Profile({user}){


    const [data, setData] = useState([])

    const [updateState, setUpdateState] = useState(0)
    const getAllPosts = async () => {
        try {
            let arr = []
            const res = await axios.get(`finalprojectserver-production.up.railway.app/auth/allposts/${user.displayName}`)

            arr.unshift(res.data)
            setData(...arr)
            return res.data

        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {

        const interval = setInterval(() => {
            getAllPosts();
            console.log('hey');
        }, 2000);
        return () => clearInterval(interval);
    }, [updateState])

    return(
        <div className="p-2  justify-content-center ">
        {data.length>0?(
                    <div>
                        {data.map((item, index) =>
                                <Post user = {user} item={item}  />
                            //<h1>{item.userName}</h1>

                        )}
                    </div>)
                :
                (<h1>lsdlds</h1>)}</div>
    );
}

export default Profile;