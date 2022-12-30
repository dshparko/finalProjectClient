import DropDown from "./dropDown/DropDown";
import DragAndDrop from "./dnd/DragAndDrop";
import MyComponent from "./Rating";
import Input from "./Input";
import TagInput from "./TagInput";

import RichEditor from "./RichEditor";
import {useState} from "react";
import {send} from "../actions/actions";

function AddPostField({user}) {

    const [reviewTitle, setReviewTitle] = useState('')
    const [workTitle, setWorkTitle] = useState('')
    const [text, setText] = useState('')
    const [teg, setTeg] = useState('')
    const [group, setGroup] = useState('')
    const [starCount, setStarCount] = useState('')

    const [setValue] = useState("");
    const getValue = (value) => {
        setValue(value);
    };

    const addPost = () => {
        alert(reviewTitle, workTitle, text, teg, group, starCount);

    }


    return (
        <>
            {
                user ? (<>
                        <div id="accordion">
                            <div className="card">
                                <div className="card-header d-flex align-items-center  " id="headingOne">

                                    <img
                                        src={user.photos[0].value}
                                        alt=""
                                        className="avatar"
                                    />
                                    <h5 className="flex-grow-1 ms-3">
                                        <button className="btn btn-link" data-toggle="collapse"
                                                style={{ textDecoration: "none", color: "inherit" }}

                                                data-target="#collapseOne"
                                                aria-expanded="true" aria-controls="collapseOne">
                                            Хотите добавить обзор?
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseOne" className="collapse" aria-labelledby="headingOne"
                                     data-parent="#accordion">
                                    <div className="card-body d-flex flex-column bd-highlight">
                                        <Input info="Название обзора"/>
                                        <Input info="Название произведения" onChange={e => setValue(e.target.value)}/>
                                        <RichEditor initialValue="" getValue={getValue}/>
                                        <TagInput onChange={e => setValue(e.target.value)}/>
                                        <DropDown/>
                                        <DragAndDrop/>
                                        <MyComponent onChange={e => setValue(e.target.value)}/>
                                        <button className="btn btn-success mb-3" onClick={addPost}>Опубликовать</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div>
                        <h1>Войдите, чтобы оставить отзыв</h1>
                    </div>
                )
            }</>
    )
}

export default AddPostField;