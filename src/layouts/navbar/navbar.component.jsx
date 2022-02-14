import React from 'react';

import './navbar.styles.css';

const Navbar = () => {
    return(
        <div className='navbar'>
            <div className='navbar-container'>
                <h1>Cart Example</h1>
                <div className='navbar__cart'>
                    Cart: 3
                </div>
            </div>
        </div>
    )
}

export default Navbar;