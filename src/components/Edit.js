import Input from "./Input";
import RichEditor from "./RichEditor";
import TagInput from "./TagInput";
import DropDown from "./dropDown/DropDown";
import DragAndDrop from "./dnd/DragAndDrop";
import MyComponent from "./Rating";
import {useState} from "react";
import {send} from "../actions/actions";
import { useParams } from "react-router-dom";
export default function Edit ({user}){
    const { id } = useParams();
    const [reviewTitle, setReviewTitle] = useState('')
    const [workTitle, setWorkTitle] = useState('')
    const [text, setText] = useState('')
    const [teg, setTeg] = useState([])
    const [group, setGroup] = useState('0')
    const [starCount, setStarCount] = useState(0)
    const [imgUrl, setImgUrl] = useState('');

    const addPost = () => {

        const time = (new Date()).toLocaleString();
        send(user.displayName, time, reviewTitle, workTitle, text, teg, group, starCount, imgUrl);
        window.reload();
    }

    // useEffect(() => {
    //     const getReviewById = async () => {
    //         try {
    //             const response = await axios.get(`https://final-project-server-rosy.vercel.app//auth/reviews/${id}`);
    //             setReviewTitle(response.data.title);
    //             setWorkTitle(response.data.workTitle);
    //             setGroup(response.data.group);
    //             setTeg(response.data.tag);
    //             setText(response.data.text);
    //             setStarCount(response.data.starCount);
    //         } catch (error) {}
    //     };
    //     getReviewById();
    // }, [id]);

    return(
        <div className="card-body d-flex flex-column bd-highlight">
            <Input info="Название обзора" reviewTitle={reviewTitle}
                   setReviewTitle={setReviewTitle}/>
            <Input info="Название произведения" reviewTitle={workTitle}
                   setReviewTitle={setWorkTitle}/>
            <RichEditor initialValue={text} getValue={setText}/>
            <TagInput selected={teg} setSelected={setTeg}/>
            <DropDown group={group} setGroup={setGroup}/>
            <DragAndDrop imgUrl={imgUrl} setImgUrl={setImgUrl}/>
            <MyComponent starCount={starCount} setStarCount={setStarCount} count={10}/>
            <button className="btn btn-success mb-3" onClick={addPost}>Опубликовать</button>
        </div>
    )
}