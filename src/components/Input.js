
function Input(props){

    const { info,reviewTitle, setReviewTitle} = props;
    return (
        <form className="form-floating mb-3">
            <input type="text" className="form-control" value={reviewTitle || ""} onChange={(event)=>setReviewTitle(event.target.value)}  id="f"/>
                <label htmlFor="floatingInputValue">{info}</label>
        </form>
    )
}


export default Input;