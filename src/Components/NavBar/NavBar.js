import React from 'react';

function NavBar() {
    return (
        <div className="NavBar">
        <ul>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" target="_blank"><li>Home</li></a>
            <a href="https://www.netflix.com/pl/" target="_blank" rel="noreferrer"><li>Home</li></a>
            <a href="https://www.facebook.com/HRejterzy/?locale=pl_PL" target="_blank" rel="noreferrer"><li>Home</li></a>
            <a href="https://www.intercity.pl/pl/" target="_blank" rel="noreferrer"><li>Home</li></a>
            <a href="https://piwoharnas.pl/bramka/" target="_blank" rel="noreferrer"><li>Home</li></a>
            <a href="https://nowysacz.pl/" target="_blank" rel="noreferrer"><li>Home</li></a>
            <a href="https://koral.com.pl/" target="_blank" rel="noreferrer"><li>Home</li></a>
        </ul>
        </div>
    );
}

export default NavBar;