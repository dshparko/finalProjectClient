import DropDown from "./dropDown/DropDown";
import DragAndDrop from "./dnd/DragAndDrop";
import MyComponent from "./Rating";
import Input from "./Input";

function AddPostField() {
    return (
        <div id="accordion">
            <div className="card">
                <div className="card-header d-flex align-items-center  " id="headingOne">

                    <img
                        src="https://sun9-18.userapi.com/impg/sWsDbdTZDArFG8IFYSrYtZPnC567A7ER8d7Rrw/L0zbURtLvJs.jpg?size=1440x2160&quality=95&sign=197b07a42c704a9069aebcb78fa69df6&type=album"
                        alt="avatar" className="flex-shrink-0 avatar"/>
                    <h5 className="flex-grow-1 ms-3">
                        <button className="btn btn-link border-success" data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true" aria-controls="collapseOne">
                            Хотите добавить обзор?
                        </button>
                    </h5>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body d-flex flex-column bd-highlight">
                        <Input info="Название обзора"/>
                        <Input info="Название произведения"/>
                        <Input info="Текст обзора"/>

                        <DropDown />

                        <DragAndDrop/>
                        <MyComponent/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPostField;