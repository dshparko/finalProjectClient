import { TagsInput } from "react-tag-input-component";
import {useState} from "react";
function TagInput(){
    const [selected, setSelected] = useState([]);

    return (
        <div className="mb-3">
        <TagsInput
            value={selected}
            onChange={setSelected}
            name="tags"
            placeHolder="enter tags"
        /></div>
    )
}


export default TagInput;