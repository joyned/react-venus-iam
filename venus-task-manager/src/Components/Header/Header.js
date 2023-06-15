import { FaAngleDown, FaCog, FaProjectDiagram, FaHome, FaTasks, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg';
import './Header.css';

function Header() {
    return (
        <header>
            <Logo width={55} />
            <div className='menu'>
                <div className='navBar'>
                    <Link to={"/"}><p><FaHome /> Home</p></Link>
                    <Link to={"/tasks"}><p><FaTasks /> Tasks</p></Link>
                    <Link to={"/projects"}><p><FaProjectDiagram />Projects</p></Link>
                    <Link to={"/settings"}><p><FaCog /> Settings</p></Link>
                </div>
                <div className='logout'>
                    <FaUserCircle size={35} />
                    Hi, John Doe
                    <FaAngleDown size={17} />
                </div>
            </div>
        </header>
    );
}

export default Header;