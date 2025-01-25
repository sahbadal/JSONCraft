import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa'; // Importing Copy Icon from react-icons

const Custom = () => {
    const [fields, setFields] = useState([{ key: '', value: '', type: 'text' }]);
    const [generatedJSON, setGeneratedJSON] = useState(null);

    const handleFieldChange = (index, field, value) => {
        const updatedFields = [...fields];
        updatedFields[index][field] = value;
        setFields(updatedFields);
    };

    const handleAddField = () => {
        setFields([...fields, { key: '', value: '', type: 'text' }]);
    };

    const handleRemoveField = (index) => {
        const updatedFields = fields.filter((_, i) => i !== index);
        setFields(updatedFields);
    };

    const handleGenerateJSON = () => {
        const json = fields.reduce((acc, field) => {
            if (field.key.trim()) {
                // Check if type is 'array', add array values as needed
                if (field.type === 'array' && field.arrayValues) {
                    acc[field.key] = field.arrayValues;
                } else {
                    acc[field.key] = field.value;
                }
            }
            return acc;
        }, {});
        setGeneratedJSON(json);
    };

    const handleCopyToClipboard = () => {
        if (generatedJSON) {
            navigator.clipboard.writeText(JSON.stringify(generatedJSON, null, 2));
            alert('JSON copied to clipboard!');
        }
    };

    return (
        <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold text-blue-600">Custom JSON Creator</h2>
            <p className="text-gray-700 mt-4 mb-6">Create your own custom JSON by adding fields, including various data types.</p>

            {/* Documentation Section inside a field */}
            <div className="bg-gray-100 p-4 rounded mb-6 border border-gray-300">
                <h3 className="font-semibold text-blue-600">How to Create JSON:</h3>
                <ol className="list-none pl-6 text-gray-700">
                    <li><strong>Step 1:</strong> Start by clicking the "Add Field" button to add your first field.</li>
                    <li><strong>Step 2:</strong> For each field, give it a <strong>Key</strong> (e.g., "name", "age", etc.) and choose its <strong>Type</strong> (e.g., Text, Number, Boolean, etc.).</li>
                    <li><strong>Step 3:</strong> Enter a value for the field (e.g., "John", "25").</li>
                    <li><strong>Step 4:</strong> If you want to add multiple values for a field (like an array), select the "Array" type and then click "Add to Array" after entering a value.</li>
                    <li><strong>Step 5:</strong> After filling in all fields, click "Generate JSON" to view your custom JSON object.</li>
                    <li><strong>Step 6:</strong> You can click the <strong>copy icon</strong> to copy the generated JSON to your clipboard for use elsewhere.</li>
                </ol>
            </div>

            {/* Fields for input */}
            {fields.map((field, index) => (
                <div key={index} className="flex items-center space-x-4 mb-4">
                    <input
                        type="text"
                        placeholder="Key"
                        value={field.key}
                        onChange={(e) => handleFieldChange(index, 'key', e.target.value)}
                        className="border p-2 rounded w-1/4"
                    />
                    <select
                        value={field.type}
                        onChange={(e) => handleFieldChange(index, 'type', e.target.value)}
                        className="border p-2 rounded w-1/4"
                    >
                        <option value="text">Text</option>
                        <option value="url">URL</option>
                        <option value="number">Number</option>
                        <option value="boolean">Boolean</option>
                        <option value="date">Date</option>
                        <option value="array">Array</option>
                    </select>
                    {field.type === 'boolean' ? (
                        <select
                            value={field.value}
                            onChange={(e) => handleFieldChange(index, 'value', e.target.value)}
                            className="border p-2 rounded w-1/3"
                        >
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    ) : field.type === 'array' ? (
                        <>
                            <input
                                type="text"
                                placeholder="Enter value for array"
                                value={field.value}
                                onChange={(e) => handleFieldChange(index, 'value', e.target.value)}
                                className="border p-2 rounded w-1/3"
                            />
                            <button
                                onClick={() => {
                                    const updatedFields = [...fields];
                                    if (field.value) {
                                        if (!updatedFields[index].arrayValues) {
                                            updatedFields[index].arrayValues = [];
                                        }
                                        updatedFields[index].arrayValues.push(field.value);
                                    }
                                    setFields(updatedFields);
                                }}
                                className="bg-yellow-500 text-white px-3 py-2 rounded ml-2"
                            >
                                Add to Array
                            </button>
                        </>
                    ) : (
                        <input
                            type={field.type === 'number' ? 'number' : field.type === 'date' ? 'date' : 'text'}
                            placeholder={field.type === 'url' ? 'Enter URL' : field.type === 'number' ? 'Enter Number' : field.type === 'date' ? 'Select Date' : 'Value'}
                            value={field.value}
                            onChange={(e) => handleFieldChange(index, 'value', e.target.value)}
                            className="border p-2 rounded w-1/3"
                        />
                    )}
                    <button
                        onClick={() => handleRemoveField(index)}
                        className="bg-red-500 text-white px-3 py-2 rounded"
                    >
                        Remove
                    </button>
                </div>
            ))}

            <button
                onClick={handleAddField}
                className="bg-green-500 text-white px-4 py-2 rounded mb-6"
            >
                Add Field
            </button>

            <button
                onClick={handleGenerateJSON}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-6 ml-4"
            >
                Generate JSON
            </button>

            {/* Copy Icon and Generated JSON */}
            {generatedJSON && (
                <div className="mt-6 flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Generated JSON:</h3>
                    <button
                        onClick={handleCopyToClipboard}
                        className="bg-gray-500 text-white p-2 rounded-full"
                    >
                        <FaCopy />
                    </button>
                </div>
            )}

            {/* Display Generated JSON */}
            {generatedJSON && (
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    {JSON.stringify(generatedJSON, null, 2)}
                </pre>
            )}
        </div>
    );
};

export default Custom;
