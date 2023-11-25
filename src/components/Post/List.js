import React, {useState, useEffect} from 'react'
import axios from 'axios';

const List = (props) => {
  const[Text, setText] = useState("")

  useEffect(() => {
    let body = {
      text: "hello"
    }
    axios
      .post("/api/test", body)
      .then((res) => {
        console.log(res);
        setText(res.data.text);
      })
      .catch((error)=>{
        console.log(error);
      })
  }, []);

  return (
    <div>
      <h2>List!</h2>
      <h2>{Text}</h2>
      {props.ContentList.map((content, idx) => {
        return <div key={idx} style={{
          width: "100%",
          marginLeft : "1rem",
          borderBottom: "1px solid black"
        }}>내용 : {content}</div>
      })}
    </div>
  )
}

export default List