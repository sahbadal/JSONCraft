import React from 'react';

const Home = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg text-white font-mono">
            <h2 className="text-3xl font-bold text-blue-500 mb-4">Welcome to JsonCraft</h2>
            <p className="text-gray-700 mb-6 ">Your go-to platform for working with JSON APIs. Whether you're testing, simulating errors, or managing complex data, jsonCraft has you covered.</p>

            {/* Introduction Section */}
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
                <h3 className="text-3xl font-semibold text-blue-400 mb-4">What is jsonCraft?</h3>
                <p className="text-gray-300">
                    jsonCraft is a powerful tool designed for developers, engineers, and testers to easily interact with APIs. Whether you're working on a front-end application, testing APIs, or need a mock service, jsonCraft helps you simulate real-world scenarios.
                </p>
            </div>

            {/* Key Features Section */}
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
                <h3 className="text-3xl font-semibold text-blue-400 mb-4">Key Features</h3>
                <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start">
                        <span className="text-blue-400 mr-2">🌐</span> API Fetching - Get live data from real-world APIs.
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-400 mr-2">⚙️</span> Simulate Errors - Test how your application handles various server errors (404, 500, 403, etc.).
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-400 mr-2">📊</span> Complex User Data - Access and manage complex user datasets.
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-400 mr-2">🔄</span> Real-Time Updates - Keep your data fresh with live updates and easy integration.
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-400 mr-2">🛠️</span> Error Handling - Simulate a variety of error responses for better testing and debugging.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
