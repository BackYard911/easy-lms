import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import logo from '../../../static/images/logo.png';
import { login } from '../../api/account';


function Login() {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate()
    async function loginProcess(){
        const res = await login(username,password);
        if(res){
            navigate("/courses")
            console.log(res,"is here");
        }
        else{
            window.alert("wrong credentials");
        }

    }

    return (
        <div>
            <div><img className='login-logo' src={logo} alt="" /></div>
            <div className='div-input'><input className='login-input' type="text" onChange={(e)=> setUsername(e.target.value) } placeholder="Enter email" name="email"></input>
                <input className='login-input' type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" name="password"></input></div>
            <div><button className='login-button' onClick={loginProcess}>Login</button></div>
            <div className="no-account">
                <h3>Don't have an account?</h3>
                <Link to="/signup">Signup</Link>
            </div>
        </div>
    )
}

export default Login;