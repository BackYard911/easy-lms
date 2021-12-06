import logo from '../../../static/images/logo.png';


function Login() {
    return (
        <header className='header'>
            <img className='header-logo' src={logo} alt="" />
            <div className='navbar'>
                <ul className='navbar-ul'>
                    <li className='navbar-li'><p className='student-name'>Student Name</p></li>
                    <li className='navbar-li'><button className='button'>Logout</button></li>
                </ul>
            </div>
        </header>
    )
}

export default Login;