import React, {useState} from 'react'
import LoginDiv from '../../Style/UserCSS'

import firebase from '../../firebase';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [PW, setPW] = useState("");
    const [PWConfirm, setPWconfirm] = useState("");
    const [Flag, setFlag] = useState(false);

    let navigate = useNavigate();

    const RegisterFunc = async(e) => {
        setFlag(true);
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

        let body = {
            email : createUser.user.multiFactor.user.email,
            displayName : createUser.user.multiFactor.user.displayName,
            uid : createUser.user.multiFactor.user.uid
        }

        axios.post("/api/user/register", body).then((response) => {
            setFlag(false);
            if(response.data.success){
                //회원가입 성공시
                navigate(-1);
            } else {
                //회원가입 실패시
                return alert("회원가입이 실패하였습니다.")
            }
        })
    };

  return (
    <LoginDiv>
        <form>
            <label>이름</label>
            <input type="name" onChange={(e) => setName(e.currentTarget.value)}/>
            <label>이메일</label>
            <input type="email" onChange={(e) => setEmail(e.currentTarget.value)}/>
            <label>비밀번호</label>
            <input type="password" minLength={8} onChange={(e) => setPW(e.currentTarget.value)}/>
            <label>비밀번호확인</label>
            <input type="password" minLength={8} onChange={(e) => setPWconfirm(e.currentTarget.value)}/>
            <button disabled={Flag} onClick={(e) => RegisterFunc(e)}>회원가입</button>
        </form>

    </LoginDiv>
  )
}

export default Register