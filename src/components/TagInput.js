import { TagsInput } from "react-tag-input-component";
function TagInput(props){

    const {selected, setSelected}=props;

    return (
        <div className="mb-3">
        <TagsInput
            value={selected}
            onChange={setSelected}
            name="tags"
            placeHolder="#"
        /></div>
    )
}


export default TagInput;