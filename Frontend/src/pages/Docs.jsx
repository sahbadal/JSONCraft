import React from 'react';
import { Link } from 'react-router-dom';

const Docs = () => {
    const endpoints = [
        { name: "Posts", path: "http://localhost:5000/api/v1/listPosts" },
        { name: "Products", path: "http://localhost:5000/api/v1/listProducts" },
        { name: "Jokes", path: "http://localhost:5000/api/v1/listJokes" },
        { name: "Quotes", path: "http://localhost:5000/api/v1/listQuotes" },
        { name: "Complex Users", path: "http://localhost:5000/api/v1/listComplexUsers" },
        { name: "Users", path: "http://localhost:5000/api/v1/listUsers" },
        { name: "Todos", path: "http://localhost:5000/api/v1/listTodos" },
    ];

    return (
        <div className="bg-white p-6 rounded shadow">
            <h2 className="text-3xl font-bold text-blue-600">Documentation</h2>
            <p className="text-gray-700 mt-4 mb-6">
                Welcome to the <strong>jsonCraft</strong> documentation! Learn how to use our API endpoints and create custom JSON objects with ease.
            </p>

            {/* Endpoints Section */}
            <div className="mt-6">
                <h3 className="text-2xl font-semibold text-blue-500">API Endpoints</h3>
                <p className="text-gray-600 mt-2">
                    All endpoints. You can click on the links below to view their corresponding JSON responses:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                    {endpoints.map((endpoint, index) => (
                        <li key={index}>
                            <Link
                                to={endpoint.path}
                                target="_blank"
                                className="text-blue-600 underline"
                            >
                                {endpoint.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* How to Fetch Data */}
            <div className="mt-6">
                <h3 className="text-2xl font-semibold text-blue-500">How to Fetch Data</h3>
                <p className="text-gray-600 mt-2">
                    Use the <code>fetch</code> method to retrieve data from any endpoint. Here's an example:
                </p>
                <pre className="bg-gray-800 p-4 rounded-md text-sm text-white overflow-x-auto mt-4">
                    {`fetch('http://localhost:5000/api/v1/listPosts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}
                </pre>
            </div>

            {/* Custom JSON Creator Section */}
            <div className="mt-6">
                <h3 className="text-2xl font-semibold text-blue-500">Custom JSON Creator</h3>
                <p className="text-gray-600 mt-2">
                    Our platform includes a powerful custom JSON creation tool. Here's how you can use it:
                </p>
                <ol className="list-none pl-6 mt-4 text-gray-700 space-y-2">
                    <li><strong>Step 1:</strong> Click the "Add Field" button to add a new field.</li>
                    <li><strong>Step 2:</strong> Enter a <strong>Key</strong> (e.g., "name", "age") and select its <strong>Type</strong> (e.g., Text, Number, Boolean).</li>
                    <li><strong>Step 3:</strong> Enter a value for the field. For arrays, select "Array" and add values using the "Add to Array" button.</li>
                    <li><strong>Step 4:</strong> Add or remove fields as needed. Use the "Remove" button to delete any unwanted fields.</li>
                    <li><strong>Step 5:</strong> Click "Generate JSON" to see your custom JSON object.</li>
                    <li><strong>Step 6:</strong> Use the copy icon to copy the generated JSON to your clipboard.</li>
                </ol>
                <p className="text-gray-600 mt-4">
                    The generated JSON can be used in your applications for various purposes, including API requests, data storage, and testing.
                </p>
            </div>
        </div>
    );
};

export default Docs;
