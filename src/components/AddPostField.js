import DropDown from "./dropDown/DropDown";
import DragAndDrop from "./dnd/DragAndDrop";
import MyComponent from "./Rating";
import Input from "./Input";
import TagInput from "./TagInput";

import RichEditor from "./RichEditor";
import {useState} from "react";
import {send} from "../actions/actions";
import Edit from "./Edit";

function AddPostField({user}) {



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
                                                style={{textDecoration: "none", color: "inherit"}}

                                                data-target="#collapseOne"
                                                aria-expanded="true" aria-controls="collapseOne">
                                            Хотите добавить обзор?
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseOne" className="collapse" aria-labelledby="headingOne"
                                     data-parent="#accordion">
                                   <Edit user={user}/>
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