import AddPostField from "../../components/AddPostField";
import Post from "../../components/post/Post";
import { useState} from "react";
import axios from 'axios'
import SimpleCloud from "../../components/SimpleCloud";
import {Button} from "react-bootstrap";
import Input from "../../components/Input";

function Main(props) {

    const {user, data, sortedPosts, tag} = props;

    const allSortedPosts = sortedPosts.map((item) => <Post user={user} item={item}/>)
    const allPosts = data.map((item) => <Post user={user} item={item}/>)
    const [value, setValue] = useState(0);
    const [workTitle, setWorkTitle] = useState('')


    const [searchData, setSearchData] = useState([])
    const [tags, setTags] = useState('')
    const [searchTag, setSearchTag] = useState([])
    const searchPosts = searchData.map((item) => <Post user={user} item={item}/>)

    const searchTagPosts = searchTag.map((item) => <Post user={user} item={item}/>)
    const send = async () => {
        try {
            let arr = []
            const res = await axios.get(`https://final-project-server-rosy.vercel.app/auth/search/${workTitle}`)

            setWorkTitle('')
            arr.unshift(res.data)
            setSearchData(...arr)
            if (!searchData.length) {
                alert("НИЧЕГО НЕ НАЙДЕНО")
            } else {

                alert("Поиск успешно завершен")
            }
            return res.data

        } catch (e) {
            console.log(e);
        }
    }

    const searchPost = async (item) => {
        try {
            let arr = []
            setTags(item)
            alert(item)
            const res = await axios.get(`https://final-project-server-rosy.vercel.app/auth/searchTag/${item}`)

            arr.unshift(res.data)
            setSearchTag(...arr)
            if (!searchTag.length) {
                alert("НИЧЕГО НЕ НАЙДЕНО")
            } else {
                alert("Поиск успешно завершен")
            }
            return res.data

        } catch (e) {
            console.log(e);
        }
    }

    return (


        <div className="p-2  justify-content-center media">
            <AddPostField user={user}/>
            <div className="d-inline-flex mb-lg-3 media mb-3 px-4">
                <h4 className='text-center'>Сортировка:</h4>
                <div className="input-group mb-3 px-4">
                    <select className="form-select" onChange={(e) => setValue(e.target.value)} id="inputGroupSelect01">
                        <option selected value="0">По времени</option>
                        <option value="1">По рейтингу</option>
                    </select>
                </div>
                <Input info="Искать" reviewTitle={workTitle}
                       setReviewTitle={setWorkTitle}/>
                <Button variant="outline-success mb-3 " onClick={send}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                         className="bi bi-search" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>

                </Button>

            </div>


            <div className='d-flex flex-row'>
                <h3>Тэги: </h3>
                <SimpleCloud data={tag} setTag={setTags} sendPost={searchPost}/>
            </div>

            {data.length > 0 ? (<div>
                        {
                            value == 0 ? allPosts.reverse() : allSortedPosts
                        }
                    </div>
                ) :
                (<h1>NULL</h1>)}
            {/*(<div>*/}
            {/*    {!searchPosts.length ? searchTagPosts : allSortedPosts}*/}
            {/*</div>) : (<h1>hhjj</h1>)*/}

            {/*(<div>*/}
            {/*    {searchPosts.length>0? searchData : allSortedPosts}*/}
            {/*</div>) : (<h1>hhjj</h1>)*/}
            {/*(<div>*/}

        </div>
    )
}

export default Main;