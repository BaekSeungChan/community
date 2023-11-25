import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Heading from './components/Heading';
import List from './components/Post/List';
import Upload from './components/Post/Upload';

function App() {
  const [ContentList, setContentList] = useState([]); 

  return (
    <>
    <Heading />
    <Routes>
      <Route path="/list" element={<List ContentList={ContentList} setContentList={setContentList}/>} />
      <Route path="/upload" element={<Upload ContentList={ContentList} setContentList={setContentList}/>}/>
    </Routes>
    </>
  );
}

export default App;
