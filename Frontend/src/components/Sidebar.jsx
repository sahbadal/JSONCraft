import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const links = [
        { name: 'Custom', path: '/custom' },
        { name: 'Posts', path: '/posts' },
        { name: 'Products', path: '/products' },
        { name: 'Jokes', path: '/jokes' },
        { name: 'Quotes', path: '/quotes' },
        { name: 'Complex Users', path: '/complex-users' },
        { name: 'Users', path: '/users' },
        { name: 'Todos', path: '/todos' },
    ];

    return (
        <nav className="bg-white border-r w-64 h-screen px-6 py-8">
            <ul className="space-y-4">
                {links.map((link) => (
                    <li key={link.name}>
                        <Link
                            to={link.path}
                            className="block font-semibold px-4 py-2 rounded hover:bg-gray-100 hover:text-blue-600"
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;
