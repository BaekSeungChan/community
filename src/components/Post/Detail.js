import React, {useEffect, useState} from 'react'
import { useParams, Link, useNavigate } from "react-router-dom"
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
    let navigate = useNavigate();
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

    useEffect(() => {
        console.log(PostInfo);
    }, [PostInfo])

    const DeleteHandler = () => {
        if(window.confirm("정말로 삭제하시겠습니까?")){
            let body = {
                postNum : params.postNum
            };
            axios.post("/api/post/delete", body)
            .then((response) => {
                if(response.data.success){
                    alert("게시글이 삭제되었습니다.")
                    navigate("/")
                }
            })
            .catch((err) => {
                alert("게시글 삭제가 실패하였습니다.")
            })
        }
    }

  return (
    <div>
        {Flag ? (
            <div>
                <Post>
                    <h1>{PostInfo.title}</h1>
                    {PostInfo.image ? (
                        <img src={`http://localhost:3001/${PostInfo.image}`} alt="" style={{width: "400px", height:"auto"}}/>
                    ) : null}
                    <p>{PostInfo.content}</p>
                </Post>
                <BtnDiv>
                    <Link to={`/edit/${params.postNum}`}>
                        <button className='edit'>수정</button>
                    </Link>
                    <button className='delete' onClick={() => DeleteHandler()}>삭제</button>
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