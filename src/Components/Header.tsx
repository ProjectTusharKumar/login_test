import React from 'react';

interface HeaderProps {
  currentForm: 'login' | 'signup';
  onFormSwitch: (formType: 'login' | 'signup') => void;
}

const Header: React.FC<HeaderProps> = ({ currentForm, onFormSwitch }) => {
  return (
    <div className="mb-8 flex space-x-4">
      <button
        onClick={() => onFormSwitch('login')}
        className={`px-4 py-2 rounded ${currentForm === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
      >
        Login
      </button>
      <button
        onClick={() => onFormSwitch('signup')}
        className={`px-4 py-2 rounded ${currentForm === 'signup' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Header;
