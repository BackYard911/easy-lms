import logo from '../../../static/images/logo.png';


function Signup() {
    return (
        <div>
            <div><img className='login-logo' src={logo} alt="" /></div>
            <div className='div-input'>
                <input className='login-input' type="text" placeholder="Name" name="name"></input>
                <input className='login-input' type="text" placeholder="Enter email" name="email"></input>
                <input className='login-input' type="password" placeholder="Password" name="password"></input>
            <div className='radio-div'>
                <div className="instructor-radio radio-group">
                <input className='login-radio' type="radio" name="role" id="instructor" value="INSTRUCTOR"></input>
                <label className='login-radio-label' for="instructor">Instructor</label>
                </div>
                <div className="student-radio radio-group">
                <input className='login-radio' type="radio" name="role" id="student" value="STUDENT"></input>
                <label className='login-radio-label' for="instructor">Student</label>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Signup;
