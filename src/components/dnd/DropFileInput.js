import React, {useRef, useState, useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject
} from "firebase/storage";
import {storage} from "../../firebase";
import {v4} from "uuid";
import {ImageConfig} from './ImageConfig';

const DropFileInput = props => {

    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);

    // const imagesListRef = ref(storage, "images/");
    // const uploadFile = () => {
    //     if (imageUpload == null) return;
    //     const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    //     uploadBytes(imageRef, imageUpload).then((snapshot) => {
    //         getDownloadURL(snapshot.ref).then((url) => {
    //             setImageUrls((prev) => [...prev, url]);
    //         });
    //     });
    // };

    // useEffect(() => {
    //     listAll(imagesListRef).then((response) => {
    //         response.items.forEach((item) => {
    //             getDownloadURL(item).then((url) => {
    //                 // setImageUrls((prev) => [...prev, url]);
    //             });
    //         });
    //     });
    // }, []);

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => {
        wrapperRef.current.classList.add('dragover');
    }

    const onDragLeave = () => {
        wrapperRef.current.classList.remove('dragover');
    }
    const onDrop = () => {
        wrapperRef.current.classList.remove('dragover');
    }

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            //   console.log(newFile);
            const imageRef = ref(storage, `images/${newFile.name}`);
            uploadBytes(imageRef, newFile).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                });
            });
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }

    const fileRemove = (file) => {
        const desertRef = ref(storage, `images/${file.name}`);

// Delete the file
        deleteObject(desertRef).then(() => {
            console.log('Success!')
            // File deleted successfully
        }).catch((error) => {
            // Uh-oh, an error occurred!
            console.log('Bad!')

        });
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    return (

        <>
            <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="drop-file-input__label">
                    <img src='https://static.thenounproject.com/png/49665-200.png' alt=""/>
                    <p>Drag & Drop your files here</p>
                </div>
                <input type="file" value="" onChange={onFileDrop}/>
            </div>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        <p className="drop-file-preview__title">
                            Ready to upload
                        </p>
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="drop-file-preview__item">
                                    <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt=""/>
                                    <div className="drop-file-preview__item__info">
                                        <p>{item.name}</p>
                                        <p>{item.size}B</p>
                                    </div>
                                    <span className="drop-file-preview__item__del"
                                          onClick={() => fileRemove(item)}>x</span>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </>


        // <div className="App">
        //     <input
        //         type="file"
        //         onChange={(event) => {
        //             setImageUpload(event.target.files[0]);
        //         }}
        //     />
        //     <button onClick={uploadFile}> Upload Image</button>
        //     {imageUrls.map((url) => {
        //         return <img src={url} />;
        //     })}
        // </div>

        //
        // <section className="container">
        //     <div {...getRootProps({style})}>
        //         <input {...getInputProps()} />
        //         <p>Drag 'n' drop some files here, or click to select files</p>
        //     </div>
        //     <aside>
        //         <h4>Files</h4>
        //         <ul>{files}</ul>
        //     </aside>
        // </section>

    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput;