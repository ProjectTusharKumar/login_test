import React from 'react';
import { useNavigate } from 'react-router-dom';
import CV from '../CV/Tushar_Resume_page-0001.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('Logged Out!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to My Profile</h1>
        
        {/* CV Image */}
        <div className="mb-4">
          <img
            src={CV}
            alt="CV"
            className="w-full rounded shadow-md"
          />
        </div>

        {/* LinkedIn and GitHub */}
        <div className="flex justify-center space-x-4 mb-4">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/tus4ar-kumar-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
          </a>
          
          {/* GitHub Icon */}
          <a
            href="https://github.com/ProjectTusharKumar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline"
          >
            <FontAwesomeIcon icon={faGithub} className="text-3xl" />
          </a>

          {/* Email Icon */}
          <a
            href="mailto:itstusharkumar15@gmail.com"
            className="text-red-500 hover:underline"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
          </a>
        </div>


        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
