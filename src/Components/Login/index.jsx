import React, { useState } from 'react'
import "../../Root/App.css"

const Login = () => {
    const [userName, setUsername] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [error, setErro] = useState('')

  return (
      <div className='Login'>
          <div className='Login-inputs'>
              <input type="text" value={userName} onChange={(e)=>setUsername(e.target.value)} placeholder="UserName" />
              <input type="password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)}  placeholder="Password"/>

              <small>this is error placeholder</small>
              <button>Login </button>
          </div>
    </div>
  )
}

export default Login