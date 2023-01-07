import {useEffect, useState} from "react";
import Heart from "react-animated-heart";
import Comment from "../Comment";
import Carousel from "../carousel/Carousel";
import Text from "../../Text";
import {
    getDownloadURL,
    listAll,
    ref,
    uploadBytes,
    deleteObject
} from "firebase/storage";
import {storage} from "../../firebase";
function Post(props) {

    const {user, item} = props;


    const [imageUrl, setImageUrl] = useState('');

    async  function getLink  (){
        const pathReference =storage().ref(item.imgUrl);
// TODO: add error handling
       const url  = await pathReference.getDownloadURL();
       return url;
    }
    getDownloadURL(ref(storage, item.imgUrl))
    const imageRef = ref(storage, item.imgUrl);
    useEffect(() => {
        listAll(imageRef).then((response) => {
                getDownloadURL(imageRef).then((url) => {
                    setImageUrl(url);
            });
        });
    }, []);

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
                                alt=""
                                className="avatar"/>
                        )}

                        <div className="details">

                            <span className="name">{item.userName}</span>

                            <span className="date">{item.time}</span>
                        </div>
                    </div>
                    <Heart isClick={isClick} onClick={() => setClick(!isClick)}/>
                </div>
                <div className="content">

                    {/*<Carousel/>*/}
                    {/*<h1>{imageUrl}</h1>*/}
                    <img
                        src={imageUrl}
                        alt=""
                        //className="avatar"
                    />
                    <div class="d-flex flex-row justify-content-xl-between justify-content-center">
                        <h1>{item.reviewTitle}</h1>
                        {/*<Heart isClick={isClick} onClick={() => setClick(!isClick)}/>*/}

                    </div>
                    <h2>{item.workTitle}</h2>

                    <h2>{item.group}</h2>
                    <div>
                        <Text props={item.text}/></div>
                </div>
                <div className="info">

                    <div className="item">
                        {/*<TextsmsOutlinedIcon />*/}
                        12 Comments
                    </div>

                </div>
                {/*{commentOpen && <Comments />}*/}
            </div>
            {user ? (<Comment user={user}/>) : (<></>)}
        </div>
    )
}

export default Post;