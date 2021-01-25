// Exercise 2: Set It Up
    // write a class component
    // make it a ul with a class name of Header
    // make four li: Catstagram, Home, About, Profile
    // put class name of Logo on the li element with GDInsta
    // export default the component!

// Exercise 6: Routing
    // import Link from react-router-dom
    // use the Link component to link to each route with a 'to' property
    // check that your links work!

import React from 'react';

function Header(){
    return(<ul className="Header">
        <li className="Logo">Catstagram</li>
        <li>Home</li>
        <li>About</li>
        <li>Profile</li>
    </ul>);
}
export default Header;