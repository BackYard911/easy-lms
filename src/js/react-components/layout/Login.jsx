import logo from '../../../static/images/logo.png';


function Login() {
    return (
        <div>
            <div><img className='login-logo' src={logo} alt="" /></div>
            <div className='div-input'><input className='login-input' type="text" placeholder="Enter email" name="email"></input>
                <input className='login-input' type="password" placeholder="Password" name="password"></input></div>
            <div><button className='login-button'>Login</button></div>
        </div>
    )
}

export default Login;