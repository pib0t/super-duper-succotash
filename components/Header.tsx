import React from 'react';
import { Button } from './Button';

export const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-gray-800">MyApp</h1>
        </div>
        <nav className="flex space-x-4">
          <Button label="Login" size="small" />
          <Button primary label="Sign Up" size="small" />
        </nav>
      </div>
    </header>
  );
};
