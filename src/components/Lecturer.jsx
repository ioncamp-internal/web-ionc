import React from 'react';
import { FaTrophy } from 'react-icons/fa';

export default function Lecturer({ name,id, experiences, avatarUrl }) {
    const showAvatar = !!avatarUrl;
    return (
        <div className="flex items-center justify-center my-8 w-full mx-auto">
            <div className="flex-1 bg-white shadow-md rounded-lg px-8 py-6 flex items-center space-x-4">
                <div className="flex-1">
                    <h2 className="mt-2 mb-2 text-lg font-bold" style={{color: "#374E82"}}>{name}</h2>
                    <h2 className="mt-2 mb-3 text-md font-semibold text-gray-800">{id}</h2>
                    {experiences.map((experience) => (
                        <p className="mt-2 mb-2 text-sm text-gray-600">
                            <FaTrophy className="inline-block mr-2 text-yellow-500" />
                            {experience}
                        </p>
                    ))}
                </div>
                {showAvatar && (
                    <div className="w-1/3">
                        <img className="w-full rounded-full" src={avatarUrl} alt="Avatar" />
                    </div>
                )}
            </div>
        </div>
    );
}
