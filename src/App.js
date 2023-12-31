import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { loginUser, clearUser} from "./Reducer/userSlice"
import firebase from "./firebase.js"
import './App.css';
import Heading from './components/Heading';
import List from './components/Post/List';
import Upload from './components/Post/Upload';
import Detail from './components/Post/Detail';
import Edit from './components/Post/Edit';
import Login from './components/User/Login';
import Register from './components/User/Register';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if(userInfo !== null){
        dispatch(loginUser(userInfo.multiFactor.user));
      } else {
        dispatch(clearUser());
      }
    })
  },[])




  return (
    <>
    <Heading />
    <Routes>
      <Route path="/list" element={<List/>} />
      <Route path="/upload" element={<Upload/>}/>
      <Route path="/post/:postNum" element={<Detail/>}/>
      <Route path="/edit/:postNum" element={<Edit/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
    </>
  );
}

export default App;
