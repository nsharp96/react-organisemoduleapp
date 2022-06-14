import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    //Properties
    //Context
    //Hooks
    //Method
 const getLinkStyle = ({isActive}) => ( isActive ? 'navSelected' : null);
    //View

    return (
        <nav>
            <div className='navItem'>
                <NavLink to='/' className={getLinkStyle} > Home </NavLink>
            </div>
            <div className='navItem'>
                <NavLink to='/signin' className={getLinkStyle} > Log In </NavLink>
            </div>
            <div className='navItem'>
                <NavLink to='/contactus' className={getLinkStyle} > Contact Us </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;