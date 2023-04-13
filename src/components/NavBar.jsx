import React, { useState } from 'react';

const NavBar = ({red,blue,cyan}) => {
    const [isVisible, setIsVsible] = useState(false)
    
    





    return (
        <div className='Navbar'>
            <h1>Diana
                <br />
                Villarreal</h1>

            <i onClick={() => setIsVsible(!isVisible)} class="menu fa-solid fa-bars">
                <div className='container'>
                    <ul className={isVisible ? 'navbar_list' : 'display_none'}>
                        <li  style={red ? {color:'red'}:{color:'white'}} className='about' >ABOUT</li>
                        <li  style={cyan ? {color:'cyan'}:{color:'white'}} className='projects' >PROJECTS</li>
                        <li  style={blue ? {color:'blue'}:{color:'white'}}className='contact' >CONTACT</li>
                    </ul>
                </div>

            </i>





        </div>
    );
};

export default NavBar;