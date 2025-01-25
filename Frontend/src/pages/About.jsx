// src/pages/About.js
import React from 'react';

const About = () => {
    return (
        <div className="bg-white p-6 rounded shadow">
            <h2 className="text-3xl font-bold text-blue-600">About Us</h2>
            <p className="text-gray-700 mt-4">
                Welcome to jsonCraft! We are a team of passionate developers working towards making it easier for developers and businesses to interact with JSON data efficiently.
            </p>

            <div className="mt-6">
                <h3 className="text-2xl font-semibold text-blue-500">Our Mission</h3>
                <p className="text-gray-600 mt-2">
                    Our mission is to provide simple yet powerful tools for managing JSON data through well-defined API endpoints. We aim to help you streamline your data management processes, making your development experience smoother and more efficient.
                </p>

                <h3 className="text-2xl font-semibold text-blue-500 mt-4">Our Vision</h3>
                <p className="text-gray-600 mt-2">
                    At jsonCraft, we envision a future where handling and processing JSON data is easier than ever. We are committed to creating tools that empower developers to focus on what matters most: building great products. We continuously work on improving our services, ensuring they remain at the forefront of modern development practices.
                </p>

                <h3 className="text-2xl font-semibold text-blue-500 mt-4">Meet the Team</h3>
                <p className="text-gray-600 mt-2">
                    We are a team of developers, designers, and tech enthusiasts who share a passion for creating solutions that make data management seamless.
                </p>

                <ul className="list-disc pl-6 mt-4">
                    <li><strong>John Doe</strong> - Project Lead and Backend Developer</li>
                    <li><strong>Jane Smith</strong> - Frontend Developer and UI/UX Designer</li>
                    <li><strong>Alex Johnson</strong> - Full Stack Developer</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-500 mt-6">Get in Touch</h3>
                <p className="text-gray-600 mt-2">
                    Have questions or want to collaborate? Reach out to us through our contact page or drop us an email at <strong>contact@jsoncraft.com</strong>. We would love to hear from you!
                </p>
            </div>
        </div>
    );
};

export default About;
