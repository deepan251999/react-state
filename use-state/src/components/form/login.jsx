import '../form/login.css'
import React,{useState} from 'react';

function Login(props){
const [email,setEmail]=useState('');
const [password,setpassword]=useState('');

const emailHandler=(e)=>{
    setEmail(e.target.value);
    console.log(e.target.value)
}
const passwordHandler=(eve)=>{
    setpassword(eve.target.value);
    console.log(eve.target.value)
}
const loginHandler=(event)=>{
    event.preventDefault();
    if(email && password){
        props.isLogin(true);
    }
}
    return(
        <div className="login-container">
            <form action="" onSubmit={loginHandler}>
                <label>Email
                    <input type="text" value={email} onChange={emailHandler}/>
                </label>
                <label>Password
                    <input type="text" value={password} onChange={passwordHandler} />
                </label>
                <button className="login-btn">click</button>
            </form>
        </div>
    )
}

export default Login;