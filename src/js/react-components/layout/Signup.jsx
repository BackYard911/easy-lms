import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../static/images/logo.png';
import { signup } from '../../api/account';


function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const navigate = useNavigate();

    async function signupProcess(){
        console.log(name, email,password,role)
        const res = await signup(name,email,password,role);

        if(res){
            window.alert("signup was successful");
            navigate("/login");
        }
        else{
            window.alert("something went wrong");
        }
    }

    return (
        <div>
            <div><img className='login-logo' src={logo} alt="" /></div>
            <div className='div-input'>
                <input className='login-input' onChange={(e)=> setName(e.target.value)} type="text" placeholder="Name" name="name"></input>
                <input className='login-input' onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Enter email" name="email"></input>
                <input className='login-input' onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" name="password"></input>
            <div className='radio-div' onChange={(e)=> setRole(e.target.value)}>
                <div className="instructor-radio radio-group">
                <input className='login-radio' type="radio" name="role" id="instructor" value="INSTRUCTOR"></input>
                <label className='login-radio-label' for="instructor">Instructor</label>
                </div>
                <div className="student-radio radio-group">
                <input className='login-radio' type="radio" name="role" id="student" value="STUDENT"></input>
                <label className='login-radio-label' for="instructor">Student</label>
                </div>
            </div>
            <div><button className='login-button' onClick={signupProcess}>Sign up</button></div>
            <div className="have-account">
                <h3>Already have an account?</h3>
                <Link to="/login">Login</Link>
            </div>
            </div>
        </div>
    )
}

export default Signup;
