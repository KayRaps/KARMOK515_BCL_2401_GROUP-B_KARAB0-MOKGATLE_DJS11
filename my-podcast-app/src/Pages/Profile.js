// src/Pages/Profile.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import '../Styles/main.css';

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="profile-page">
      {currentUser ? (
        <div>
          <h1>Welcome, {currentUser.email}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Profile;
