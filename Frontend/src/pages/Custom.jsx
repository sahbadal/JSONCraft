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
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white font-mono">
            <h2 className="text-3xl font-bold text-blue-500">Custom JSON Creator</h2>
            <p className="text-gray-400 mt-4 mb-6">Create your own custom JSON by adding fields, including various data types.</p>

            {/* Fields for input */}
            <div className="bg-gray-800 p-4 rounded-md mb-6 border border-gray-600">
                <h3 className="text-xl font-semibold text-blue-500 mb-4">Field Creation:</h3>
                {fields.map((field, index) => (
                    <div key={index} className="flex items-center space-x-4 mb-4">
                        <input
                            type="text"
                            placeholder="Key"
                            value={field.key}
                            onChange={(e) => handleFieldChange(index, 'key', e.target.value)}
                            className="border border-gray-600 bg-gray-700 p-2 rounded-md w-1/4 text-gray-400"
                        />
                        <select
                            value={field.type}
                            onChange={(e) => handleFieldChange(index, 'type', e.target.value)}
                            className="border border-gray-600 bg-gray-700 p-2 rounded-md w-1/4 text-gray-400"
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
                                className="border border-gray-600 bg-gray-700 p-2 rounded-md w-1/3 text-gray-400"
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
                                    className="border border-gray-600 bg-gray-700 p-2 rounded-md w-1/3 text-gray-400"
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
                                    className="bg-yellow-500 text-white px-3 py-2 rounded-md ml-2"
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
                                className="border border-gray-600 bg-gray-700 p-2 rounded-md w-1/3 text-gray-400"
                            />
                        )}
                        <button
                            onClick={() => handleRemoveField(index)}
                            className="bg-red-500 text-white px-3 py-2 rounded-md"
                        >
                            Remove
                        </button>
                    </div>
                ))}

                <button
                    onClick={handleAddField}
                    className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
                >
                    Add Field
                </button>
            </div>

            <button
                onClick={handleGenerateJSON}
                className="bg-blue-600 text-white px-4 py-2 rounded-md mb-6"
            >
                Generate JSON
            </button>

            {/* Copy Icon and Generated JSON */}
            {generatedJSON && (
                <div className="mt-6 flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Generated JSON:</h3>
                    <button
                        onClick={handleCopyToClipboard}
                        className="bg-gray-600 text-white p-2 rounded-full"
                    >
                        <FaCopy />
                    </button>
                </div>
            )}

            {/* Display Generated JSON */}
            {generatedJSON && (
                <pre className="bg-gray-800 p-4 rounded-md mt-4 text-sm text-gray-400">
                    {JSON.stringify(generatedJSON, null, 2)}
                </pre>
            )}
        </div>
    );
};

export default Custom;
