import React, { useState } from 'react';

const Users = () => {
    const [url, setUrl] = useState('https://jsoncraft.onrender.com/api/v1/listUsers/6794aee6ba66a9df497582eb'); // Default URL for users
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);

    // Function to fetch data
    const handleRunScript = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setUsers(data); // Set the fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
            setUsers({}); // In case of error, show empty object
        }
        setLoading(false);
    };

    // Function to copy the URL to clipboard
    const handleCopyUrl = () => {
        navigator.clipboard.writeText(url).then(() => {
            alert('URL copied to clipboard!');
        }).catch(err => {
            console.error('Error copying URL: ', err);
        });
    };

    return (
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white font-mono">
            <h2 className="text-3xl font-bold text-blue-500 mb-4">Run API Fetch Script for Users</h2>
            <p className="text-gray-400 mb-6">Run the script and fetch user data from your API URL.</p>

            {/* Example Code Section */}
            <div className="bg-gray-800 p-4 rounded-md mb-6">
                <h3 className="text-xl font-semibold text-blue-500 mb-2">Example Fetch Code:</h3>
                <pre className="bg-gray-700 p-4 rounded-md text-sm overflow-x-auto">
                    {`fetch('https://jsoncraft.onrender.com/api/v1/listUsers')
  .then(response => response.json())
  .then(json => console.log(json))`}
                </pre>
            </div>

            {/* URL Input and Copy Button */}
            <div className="flex flex-col mb-4">
                <div className="relative">
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="border border-gray-600 bg-gray-800 p-3 rounded-md w-full text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your API URL"
                    />
                    <button
                        onClick={handleCopyUrl}
                        className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-md mt-2 mr-2"
                    >
                        Copy URL
                    </button>
                </div>
            </div>

            {/* Run Script Button */}
            <div className="mb-6">
                <button
                    onClick={handleRunScript}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md w-full"
                    disabled={loading}
                >
                    {loading ? 'Fetching...' : 'Run Script'}
                </button>
            </div>

            {/* Output Section */}
            <div className="bg-gray-800 p-4 rounded-md overflow-x-auto">
                <h3 className="text-xl font-semibold mb-2">Output:</h3>
                <pre className="bg-gray-700 p-4 rounded-md text-sm">
                    {users ? JSON.stringify(users, null, 2) : '{}'}
                </pre>
            </div>
        </div>
    );
};

export default Users;
