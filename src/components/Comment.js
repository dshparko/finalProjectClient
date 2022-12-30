import Input from "./Input";

export default function Comment({user}){
    return(
        <div className="card-header d-flex align-items-center bd-highlight " id="a">

             <img
                src={user.photos[0].value}
                alt=""
                className="avatar"
            />

               <Input info="Напишите что-нибудь"/>

        </div>
    )
}