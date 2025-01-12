import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto flex items-center justify-between py-4 px-9">
                <Link to="/" className="text-3xl font-bold text-blue-600">
                    JsonCraft
                </Link>
                <nav className="flex space-x-4">
                    <Link to="/docs" className="text-gray-600 hover:text-blue-600">
                        Documentation
                    </Link>
                    <Link to="/about" className="text-gray-600 hover:text-blue-600">
                        About Us
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
