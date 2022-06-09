import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-light">
                <div class="container">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to='/' class="nav-link" >Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;