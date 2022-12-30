import {Link} from "react-router-dom";
import {useState} from "react";
import Heart from "react-animated-heart";
import Comment from "../Comment";

function Post({user}) {

    const [isClick, setClick] = useState(false);
    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        {user ? (<>
                            <a href='/profile'>
                                <img
                                    src={user.photos[0].value}
                                    alt=""
                                    className="avatar"
                                />
                            </a></>) : (<img
                                src="https://sun9-18.userapi.com/impg/sWsDbdTZDArFG8IFYSrYtZPnC567A7ER8d7Rrw/L0zbURtLvJs.jpg?size=1440x2160&quality=95&sign=197b07a42c704a9069aebcb78fa69df6&type=album"
                                alt=""/>
                        )}

                        <div className="details">

                            {user ? (<span className="name">{user.displayName}</span>
                                ):(<span className="name">Dasha</span>
                            )}
                            <span className="date">30.12.2022, 20:47:36</span>
                        </div>
                    </div>
                    {/*<MoreHorizIcon />*/}
                </div>
                <div className="content">

                    <img
                        src="https://sun9-18.userapi.com/impg/sWsDbdTZDArFG8IFYSrYtZPnC567A7ER8d7Rrw/L0zbURtLvJs.jpg?size=1440x2160&quality=95&sign=197b07a42c704a9069aebcb78fa69df6&type=album"
                        alt=""/>
                    <div class="d-flex flex-row justify-content-xl-between justify-content-center">
                        <h1>Title</h1>
                        <Heart isClick={isClick} onClick={() => setClick(!isClick)}/>

                    </div>

                    <h2>Group</h2>
                    <p>text</p>
                 </div>
                <div className="info">

                    <div className="item">
                        {/*<TextsmsOutlinedIcon />*/}
                        12 Comments
                    </div>

                </div>
                {/*{commentOpen && <Comments />}*/}
            </div>
            {user ? (<Comment user ={user}/>):(<></>)}
        </div>
    )
}

export default Post;