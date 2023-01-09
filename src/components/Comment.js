import Input from "./Input";
import {Button} from "react-bootstrap";
import {useState} from "react";
import {sendComment} from "../actions/actions";

export default function Comment({user}) {


    const send = () => {
        const time = (new Date()).toLocaleString();
        sendComment(user.displayName, time, text);
        window.reload();
    }
    const [text, setText] = useState('')
    return (


        <div className="card-header d-flex justify-content-center bd-highlight " class='message' id="a">

            <img
                src={user.photos[0].value}
                alt=""
                className="avatar"
            />
            <div className='d-inline-flex justify-content-center'>
                <Input info="Напишите что-нибудь" reviewTitle={text} setReviewTitle={setText}/>
                <Button variant="outline-success mb-3 " onClick={send}>Отправить</Button>
            </div>
        </div>
    )
}