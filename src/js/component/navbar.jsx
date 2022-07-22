import React from 'react';

const Navbar = () => {
    return(
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">4Geeks</a>
                <ul class="nav nav-pills">
                    <li class="nav-item"><a href="#" class="nav-link active-secondary" aria-current="page">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-secondary">Features</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-secondary">Pricing</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-secondary">FAQs</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-secondary">About</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
