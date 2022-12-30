import AddPostField from "../../components/AddPostField";
import Post from "../../components/post/Post";

function Main({user}) {
    return (
        <div className="p-2  justify-content-center ">
            <AddPostField user = {user}/>
            <Post user = {user}/>
        </div>
    )
}

export default Main;