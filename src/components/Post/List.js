import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { ListDiv, ListItem } from '../../Style/ListCSS';
import { Link } from 'react-router-dom'

const List = (props) => {
  const [PostList, setPostList] = useState([]);


  useEffect(() => {
    axios.post("/api/post/list")
    .then((response) => {
      if(response.data.success){
        console.log(response);
        setPostList([...response.data.postList.doc])
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <ListDiv>
      {PostList.map((post, idx) => {
        return <ListItem key={idx}>
           <Link to={`/post/${post.postNum}`}>
            <p className="title">{post.title}</p>
            <p>{post.content}</p>
          </Link>
          </ListItem>
      })}
    </ListDiv>
  )
}

export default List