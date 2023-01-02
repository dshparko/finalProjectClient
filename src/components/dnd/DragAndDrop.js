import DropFileInput from "./DropFileInput";

export default function DragAndDrop(){

    const onFileChange = (files) => {
        console.log(files);
    }


    return (
        <div className="box ">
            <DropFileInput
            />

        </div>
    )
}