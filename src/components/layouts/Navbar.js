import './Navbar.css';

const Navbar = () => {
    //Properties
    //Context
    //Hooks
    //Method
    //View

    return (
        <nav>
            <div className='navItem'>
                <a href='/'>Home</a>
            </div>
            <div className='navItem'>
                <a href='/signin'>Log In</a>
            </div>
            <div className='navItem'>
                <a href='/contact'>Contact Us</a>
            </div>
        </nav>
    );
}

export default Navbar;