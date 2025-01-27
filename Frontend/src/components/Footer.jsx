import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    // State to handle form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const feedbackData = { name, email, message };

        try {
            const response = await fetch('http://localhost:5000/api/v1/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feedbackData),
            });

            const data = await response.json();
            if (response.ok) {
                setStatus('Feedback submitted successfully!');
                setName('');
                setEmail('');
                setMessage('');

                // Clear status message after 5 seconds
                setTimeout(() => setStatus(''), 2000);
            } else {
                setStatus(`Error: ${data.message}`);
            }
        } catch (error) {
            setStatus('Something went wrong. Please try again.');
        }
    };


    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-8">
                    <div>
                        <Link to={'/'}><h2 className="text-4xl font-bold text-blue-600">JsonCraft</h2></Link>
                        <p className="text-white text-lg mt-4">
                            JsonCraft simplifies JSON creation and management for developers. With tools like real-time validation and easy collaboration, we make handling complex data efficient and error-free. Build smarter with JsonCraft!
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl mb-4">Give Feedback</h3>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <textarea
                                placeholder="Your Message"
                                className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                        {status && <p className="text-green-500 mt-4">{status}</p>}
                    </div>
                    <div>
                        <h3 className="text-xl mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/sahbadal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-2xl hover:text-blue-600 duration-200"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/badal-sah/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-2xl hover:text-blue-600 duration-200"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a
                                href="https://linkedin.com/company/jsoncraft"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-2xl hover:text-blue-600 duration-200"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="https://linkedin.com/company/jsoncraft"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-2xl hover:text-blue-600 duration-200"
                            >
                                <i className="fab fa-discord"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8 text-center">
                    <p className="text-gray-400 text-sm">&copy; 2024 JsonCraft. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
