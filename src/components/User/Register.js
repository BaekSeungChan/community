import React, {useState} from 'react'
import LoginDiv from '../../Style/UserCSS'

import firebase from '../../firebase';

const Register = () => {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [PW, setPW] = useState("");
    const [PWConfirm, setPWconfirm] = useState("");

    const RegisterFunc = async(e) => {
        e.preventDefault();
        if(!(Name && Email && PWConfirm)){
            return alert("모든 값을 채워주세요!")
        } 
        if(PW != PWConfirm){
            return alert("비밀번호화 비밀번호 확인 값은 같아야 합니다.");
        }
        let createUser = await firebase.auth().createUserWithEmailAndPassword(Email, PW);
        await createUser.user.updateProfile({
            displayName: Name,
        })

        console.log(createUser.user);
    };

  return (
    <LoginDiv>
        <form>
            <label>이름</label>
            <input type="name" onChange={(e) => setName(e.currentTarget.value)}/>
            <label>이메일</label>
            <input type="email" onChange={(e) => setEmail(e.currentTarget.value)}/>
            <label>비밀번호</label>
            <input type="password" onChange={(e) => setPW(e.currentTarget.value)}/>
            <label>비밀번호확인</label>
            <input type="password" onChange={(e) => setPWconfirm(e.currentTarget.value)}/>
            <button onClick={(e) => RegisterFunc(e)}>회원가입</button>
        </form>

    </LoginDiv>
  )
}

export default Register