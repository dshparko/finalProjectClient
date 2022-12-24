import AddPostField from "../../components/AddPostField";

function Main({user}) {
    return (
        <div className="p-2 d-xl-flex justify-content-center ">
            <AddPostField user = {user}/>
        </div>
    )
}

export default Main;