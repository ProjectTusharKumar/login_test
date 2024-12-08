import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Components/Header.tsx';
import LoginForm from './Components/LoginForm.tsx';
import SignUpForm from './Components/SignUpForm.tsx';
import Profile from './Components/Profile.tsx';

const Home: React.FC = () => {
  const [formType, setFormType] = useState<'login' | 'signup'>('login');
  const [users, setUsers] = useState<{ email: string; password: string }[]>(
    JSON.parse(localStorage.getItem('users') || '[]')
  );
  const navigate = useNavigate();

  const handleSignUp = (email: string, password: string) => {
    const newUsers = [...users, { email, password }];
    localStorage.setItem('users', JSON.stringify(newUsers));
    setUsers(newUsers);
    alert('Sign Up Successful!');
    setFormType('login');
  };

  const handleLogin = (email: string, password: string) => {
    const userExists = users.some((user) => user.email === email && user.password === password);
    if (userExists) {
      alert('Login Successful!');
      navigate('/profile');
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Header currentForm={formType} onFormSwitch={setFormType} />
      <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full">
        {formType === 'login' ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <SignUpForm onSignUp={handleSignUp} />
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
