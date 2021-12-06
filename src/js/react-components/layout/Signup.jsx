import logo from '../../../static/images/logo.png';


function Signup() {
    return (
        <div>
            <div><img className='login-logo' src={logo} alt="" /></div>
            <div className='div-input'>
                <input className='login-input' type="text" placeholder="Name" name="name"></input>
                <input className='login-input' type="text" placeholder="Enter email" name="email"></input>
                <input className='login-input' type="password" placeholder="Password" name="password"></input></div>
            <div className='radio-div'>
                <input className='login-radio' type="radio" id="instructor"  value="INSTRUCTOR"></input>
                <label className='login-radio-label' for="instructor">Instructor</label>
                <input className='login-radio' type="radio" id="student"  value="STUDENT"></input>
                <label className='login-radio-label' for="instructor">Student</label>
             </div>
        </div>
    )
}

export default Signup;