import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white py-10 text-center">
            <div className="max-w-7xl mx-auto px-4 ">
                <p className="text-sm">&copy; {new Date().getFullYear()} jsonCraft. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
