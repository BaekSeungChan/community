import React,{useState, useEffect} from 'react'

const Upload = (props) => {
  const [Content, setContent] = useState("");

  const onSubmit = () => {
    let tempArr = [...props.ContentList];
    tempArr.push(Content);
    props.setContentList([...tempArr]);
    setContent("");
  }
  
  useEffect(() => {
    console.log("Content가 바뀌었습니다.");
  }, [Content]);


  return (
    <div>
      <input type="text" value={Content} onChange={(e) => setContent(e.currentTarget.value)}/>
      <button style={{marginTop:"1rem"}} onClick={() => {
        onSubmit();
      }}>제출!</button>
    </div>
  )
}

export default Upload