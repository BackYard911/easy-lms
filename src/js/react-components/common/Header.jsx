import { useNavigate } from 'react-router-dom';
import logo from '../../../static/images/logo.png';
import auth from '../../consts/auth';


function Header() {

    const navigate = useNavigate();

    return (
        <header className='header'>
            <img className='header-logo' src={logo} alt="" />
            <div className='navbar'>
                <ul className='navbar-ul'>
                    <li className='navbar-li'><p className='student-name'>Hello {localStorage.getItem("name")}</p></li>
                    <li className='navbar-li'><button onClick={()=>{auth.logout(()=> navigate("/login"))}} className='button'>Logout</button></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;