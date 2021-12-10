import logo from '../../../static/images/logo.png';


function Header() {
    return (
        <header className='header'>
            <img className='header-logo' src={logo} alt="" />
            <div className='navbar'>
                <ul className='navbar-ul'>
                    <li className='navbar-li'><p className='student-name'>Hello {localStorage.getItem("name")}</p></li>
                    <li className='navbar-li'><button className='button'>Logout</button></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;