import React, { useContext, useState } from 'react';  // Corrected 'react' spelling

import { AuthContext } from '../Contexts/AuthContext';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User logged in:', userCredential.user);
      })
      .catch((error) => {
        console.error('Error logging in:', error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <div>
      <h1>Profile</h1>
      {currentUser ? (
        <div>
          <p>Welcome, {currentUser.email}</p>
          <button onClick={handleSignOut}>Sign Out</button> {/* Added onClick handler */}
        </div>
      ) : (
        <div>
          <p>Please log in</p>
          <form onSubmit={(e) => { e.preventDefault(); handleSignIn(email, password); }}> {/* Added onSubmit handler */}
            <label>Email:</label>
            <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} /> {/* Corrected onChange handler */}
            <br />
            <label>Password:</label>
            <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} /> {/* Corrected onChange handler */}
            <br />
            <button type="submit">Log In</button> {/* Added type="submit" */}
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
