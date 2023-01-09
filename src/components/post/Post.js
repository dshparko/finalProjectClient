import {useEffect, useState} from "react";
import Heart from "react-animated-heart";
import Comment from "../Comment";
import Text from "../../Text";
import {
    getDownloadURL,
    listAll,
    ref,
} from "firebase/storage";
import {storage} from "../../firebase";
import MyComponent from "../Rating";
import SimpleCloud from "../SimpleCloud";
import {Button} from "react-bootstrap";
import Edit from "../Edit";
import JsPDF from 'jspdf';
import Message from "../Message";

function Post(props) {

    const {user, item} = props;

    const [starCount, setStarCount] = useState(0)
    const generatePDF = () => {

        const report = new JsPDF('portrait', 'pt', 'a4');
        report.html(document.querySelector('#report')).then(() => {
            report.save('report.pdf');
        });
    }

    const [imageUrl, setImageUrl] = useState('');

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
        <div className="post d-flex justify-content-center" id='report'>
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
                    <div className='d-inline-flex'>
                        <h3>Оценка автора: {item.starCount}</h3>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                             height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"></path>
                        </svg>
                    </div>
                </div>
                <div className="content">

                    <img
                        src={imageUrl}
                        alt=""
                    />
                    <div class="d-flex flex-row justify-content-xl-between justify-content-center">
                        <h1>{item.reviewTitle}</h1>
                        {/*<Heart isClick={isClick} onClick={() => setClick(!isClick)}/>*/}

                    </div>
                    <div className="d-flex flex-row justify-content-xl-between">
                        <h2>{item.workTitle}</h2>

                        {user ? (
                                <div className="d-flex flex-column justify-content-xl-between"><MyComponent startCount={item.mark}
                                                                                                            setStarCount={setStarCount}
                                                                                                            count={5}
                                                                                                            read={!starCount}/>

                                </div>)
                            :

                            (<div className="d-flex flex-column justify-content-xl-between"><MyComponent startCount={starCount}
                                                                                                         setStarCount={setStarCount}
                                                                                                         count={5}
                                                                                                         read={true}/>

                            </div>)}
                    </div>
                    <h3>{<SimpleCloud data={item.teg.map((item) => item)}/>}</h3>
                    <div>
                        <Text props={item.text}/></div>
                </div>
                <div className="info">

                    <div className="item">
                        {item.comments.length} Comments
                    </div>

                    <h3>0</h3>
                    {user ? (<a isClick={isClick} onClick={() => setClick(!isClick)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-suit-heart" viewBox="0 0 16 16">
                            <path
                                d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                        </svg>
                    </a>) : (<Heart/>)}

                </div>

                <Button type="button" variant="outline-success"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-pencil" viewBox="0 0 16 16">
                        <path
                            d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                    </svg>
                </Button>

                <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <Edit/>
                            </div>
                            <div class="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                </button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Button variant="outline-success" onClick={generatePDF}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-download" viewBox="0 0 16 16">
                        <path
                            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path
                            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                    </svg>
                </Button>

            </div>
            <div>
            {/*{item.comments.length.map((item)=>)}<Message/>*/}
                <Message/>
        </div>
            {user ? (<Comment user={user}/>) : (<></>)}
        </div>
    )
}

export default Post;