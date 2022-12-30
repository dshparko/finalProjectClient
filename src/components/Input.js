
function Input(props){
    const { info} = props;
    return (
        <form className="form-floating mb-3">
            <input type="text" className="form-control" id="f"/>
                <label htmlFor="floatingInputValue">{info}</label>
        </form>
    )
}


export default Input;