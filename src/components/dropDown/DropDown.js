function DropDown(props){

    const {group, setGroup} =props;

    return(

        <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Группа</label>
            <select className="form-select" onChange={(e)=>setGroup(e.target.value)} id="inputGroupSelect01">
                <option selected>Кино</option>
                <option value="1">Музыка</option>
                <option value="2">Игры</option>
                <option value="3">Искусство</option>
            </select>
        </div>
    )
}

export default DropDown;