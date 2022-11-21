import axios from 'axios'
import React, { useState } from 'react'
import "../../Root/App.css"

const Login = ({token,setToken}) => {
    const [userName, setUsername] = useState('')
    const [password, setUserPassword] = useState('')
    const [error, setErro] = useState('')
    const loginHandeler = () => {
        setUsername('')
        setUserPassword('')
        setErro('')

        axios({
            url: "https://fakestoreapi.com/auth/login",
            method: "POST",
            data: {
                username: userName,
                password: password
          }
        }).then(res => {
            console.log(res.data.token, 'ruqi');
            setToken(res.data.token)
            localStorage.setItem("userToken",res.data.token)
        }).catch(err => {
            console.log(err.response.data);
            setErro(err.response.data)
    })
}
  return (
      <div className='Login'>
          <div className='Login-inputs'>
              <p>name: mor_2314</p>
              <p> password: 83r5^_</p>
              <input type="text" value={userName} onChange={(e)=>setUsername(e.target.value)} placeholder="UserName" />
              <input type="password" value={password} onChange={(e) => setUserPassword(e.target.value)}  placeholder="Password"/>
              {error && <small> {error} </small>}
              <button onClick={loginHandeler}>Login </button>
          </div>
    </div>
  )
}

export default Login