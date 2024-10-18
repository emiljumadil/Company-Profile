"use client"

import React from 'react';

const SocialIcons: React.FC = () => {
    return (
        <div className="flex space-x-4 p-4">
            <a href="https://twitter.com" className="text-black hover:text-gray-700" aria-label="Twitter">
                <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="https://facebook.com" className="text-black hover:text-gray-700" aria-label="Facebook">
                <i className="fab fa-facebook-f fa-lg"></i>
            </a>
            <a href="https://linkedin.com" className="text-black hover:text-gray-700" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in fa-lg"></i>
            </a>
            <a href="https://instagram.com" className="text-black hover:text-gray-700" aria-label="Instagram">
                <i className="fab fa-instagram fa-lg"></i>
            </a>
        </div>
    );
};

export default SocialIcons;
