import {sendComment} from "../actions/actions";
import {useState} from "react";
import Input from "./Input";

export default function Message(){


    const [text, setText] = useState('ывапвавыфыыавпаыв')
    return(

        <div class='message'>

            <Input info="Дарья Шпарко" reviewTitle={text} />


        </div>
    )
}