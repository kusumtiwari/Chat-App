import React from 'react';

const LoadingSpinner: React.FC = () => (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative">
            <div className="w-16 h-16 border-4 border-t-4 border-primary rounded-full animate-spin"></div>
            <span className="absolute inset-0 flex items-center justify-center text-secondary text-xl font-semibold">Loading...</span>
        </div>
    </div>
);

export default LoadingSpinner;
