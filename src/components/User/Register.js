import React, {useState} from 'react'
import LoginDiv from '../../Style/UserCSS'

const Register = () => {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [PW, setPW] = useState("");
    const [PWConfirm, setPWconfirm] = useState("");
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
            <button>회원가입</button>
        </form>

    </LoginDiv>
  )
}

export default Register