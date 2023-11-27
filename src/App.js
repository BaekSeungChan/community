import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Heading from './components/Heading';
import List from './components/Post/List';
import Upload from './components/Post/Upload';
import Detail from './components/Post/Detail';
import Edit from './components/Post/Edit';

function App() {
  const [ContentList, setContentList] = useState([]); 

  return (
    <>
    <Heading />
    <Routes>
      <Route path="/list" element={<List/>} />
      <Route path="/upload" element={<Upload/>}/>
      <Route path="/post/:postNum" element={<Detail/>}/>
      <Route path="/edit/:postNum" element={<Edit/>}/>
    </Routes>
    </>
  );
}

export default App;
