import React from "react";
import {Button} from "react-bootstrap";

export default function SimpleCloud(props) {

    const {data,setTag,sendPost} = props



    return(
    <div>

        {data.map((item)=><Button  variant="outline-success" className='rounded-5' onClick={()=>{setTag(item);sendPost(item)}}  id='item'>{item}</Button>)}
</div>
);
}