import React from 'react';

const MainContent = ({ children }) => {
    return (
        <main className="flex-1 bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">{children}</div>
        </main>
    );
};

export default MainContent;
