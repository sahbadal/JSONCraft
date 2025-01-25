// src/pages/Docs.js
import React from 'react';

const Docs = () => {
    return (
        <div className="bg-white p-6 rounded shadow">
            <h2 className="text-3xl font-bold text-blue-600">Documentation</h2>
            <p className="text-gray-700 mt-4">
                Welcome to the jsonCraft API documentation! This guide will help you understand how to interact with the API and use its features effectively.
            </p>
            <div className="mt-6">
                <h3 className="text-2xl font-semibold text-blue-500">Getting Started</h3>
                <p className="text-gray-600 mt-2">
                    jsonCraft offers a set of powerful API endpoints that allow you to easily manage and interact with JSON data. You can use it to create, read, update, and delete resources like users, products, and much more.
                </p>
                <p className="text-gray-600 mt-2">
                    To get started, you will need to set up your environment and have an API endpoint URL ready to interact with.
                </p>
                <h4 className="text-xl font-semibold text-blue-500 mt-4">Installation</h4>
                <pre className="bg-gray-700 p-4 rounded-md text-white mt-2">
                    {`# Clone the repository
git clone https://github.com/your-username/jsoncraft.git

# Install dependencies
npm install

# Start the server
npm start`}
                </pre>

                <h4 className="text-xl font-semibold text-blue-500 mt-4">API Endpoints</h4>
                <p className="text-gray-600 mt-2">
                    jsonCraft provides several endpoints for managing different resources. Here’s a quick overview:
                </p>
                <ul className="list-disc pl-6">
                    <li><strong>/api/v1/listUsers</strong>: Fetch all users</li>
                    <li><strong>/api/v1/listProducts</strong>: Fetch all products</li>
                    <li><strong>/api/v1/listJokes</strong>: Fetch jokes</li>
                    <li><strong>/api/v1/listQuotes</strong>: Fetch motivational quotes</li>
                    <li><strong>/api/v1/simulate-error/:type</strong>: Simulate various errors for testing</li>
                </ul>

                <h4 className="text-xl font-semibold text-blue-500 mt-4">Example Request</h4>
                <p className="text-gray-600 mt-2">
                    Here’s an example of how you can fetch all users from the API:
                </p>
                <pre className="bg-gray-700 p-4 rounded-md text-white mt-2">
                    {`fetch('http://localhost:5000/api/v1/listUsers')
  .then(response => response.json())
  .then(data => console.log(data))`}
                </pre>

                <h4 className="text-xl font-semibold text-blue-500 mt-4">Error Handling</h4>
                <p className="text-gray-600 mt-2">
                    jsonCraft also supports error simulation. Use the <strong>/simulate-error/:type</strong> endpoint to test various types of errors:
                </p>
                <ul className="list-disc pl-6">
                    <li><strong>404</strong>: Resource not found</li>
                    <li><strong>500</strong>: Internal server error</li>
                    <li><strong>403</strong>: Forbidden access</li>
                    <li><strong>400</strong>: Bad request</li>
                </ul>

                <h4 className="text-xl font-semibold text-blue-500 mt-4">Example Error Request</h4>
                <p className="text-gray-600 mt-2">
                    To simulate a 404 error, make a GET request to:
                </p>
                <pre className="bg-gray-700 p-4 rounded-md text-white mt-2">
                    {`fetch('http://localhost:5000/api/v1/simulate-error/404')
  .then(response => response.json())
  .then(data => console.log(data))`}
                </pre>

                <h4 className="text-xl font-semibold text-blue-500 mt-4">Authentication</h4>
                <p className="text-gray-600 mt-2">
                    jsonCraft does not currently require authentication for using the APIs. However, we plan to implement user authentication in future updates for secure access to certain endpoints.
                </p>

                <h4 className="text-xl font-semibold text-blue-500 mt-4">Contact</h4>
                <p className="text-gray-600 mt-2">
                    If you have any questions or need support, feel free to contact us at <strong>support@jsoncraft.com</strong>.
                </p>
            </div>
        </div>
    );
};

export default Docs;
