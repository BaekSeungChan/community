import React, {useEffect, useState} from 'react'
import { useParams, Link } from "react-router-dom"
import axios from 'axios'

import {
    PostDiv,
    SpinnerDiv,
    Post,
    BtnDiv
} from "../../Style/PostDetailCSS"
import { Spinner } from "react-bootstrap"

const Detail = () => {
    let params = useParams();
    const [PostInfo, setPostInfo] = useState([]);
    const [Flag, setFlag] = useState(false);

    useEffect(() => {
        let body = {
            postNum : params.postNum
        };
        axios.post("/api/post/detail", body)
        .then((response) => {
            if(response.data.success){
                setPostInfo(response.data.post);
                setFlag(true);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

  return (
    <div>
        {Flag ? (
            <div>
                <Post>
                    <h1>{PostInfo.title}</h1>
                    <p>{PostInfo.content}</p>
                </Post>
                <BtnDiv>
                    <Link to={`/edit/${params.postNum}`}>
                        <button className='edit'>수정</button>
                    </Link>
                    <button className='delete'>삭제</button>
                </BtnDiv>
            </div>
        ): (
            <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
    </div>
  )
}

export default Detail