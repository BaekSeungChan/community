import React, {useState} from 'react'
import { Button } from 'react-bootstrap';


const List = (props) => {

  return (
    <div>
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