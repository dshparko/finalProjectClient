function DropDown(){
    return(

        <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Группа</label>
            <select className="form-select" id="inputGroupSelect01">
                <option selected>Кино</option>
                <option value="1">Музыка</option>
                <option value="2">Игры</option>
                <option value="3">Искусство</option>
            </select>
        </div>
        // <div className="dropdown mb-3">
        //     <a className="btn btn-outline-success dropdown-toggle" role="button" id="dropdownMenuLink"
        //        data-bs-toggle="dropdown" aria-expanded="false">
        //         Кино
        //     </a>
        //
        //     <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        //         <li><a className="dropdown-item" >Музыка</a></li>
        //         <li><a className="dropdown-item" >Игры</a></li>
        //         <li><a className="dropdown-item" >Искусство</a></li>
        //     </ul>
        // </div>
    )
}

export default DropDown;