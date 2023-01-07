import DropFileInput from "./DropFileInput";

export default function DragAndDrop(props) {

    const {imgUrl, setImgUrl} = props;

    return (
        <div className="box ">
            <DropFileInput imgUrl={imgUrl} setImgUrl={setImgUrl}/>
        </div>
    )
}