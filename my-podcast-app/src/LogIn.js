import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

function logIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password) // Added return statement
    .then((userCredential) => {
      // Logged in
      const user = userCredential.user;
      console.log("User logged in:", user);
      return user; // Return user object
    })
    .catch((error) => {
      console.error("Error logging in:", error);
      throw error; // Throw error to handle in UI
    });
}

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(email, password)
      .then((user) => {
        // Handle successful login
        // You can redirect or update state to indicate logged-in state
      })
      .catch((error) => {
        // Handle login error
        // You can show an error message to the user
      });
  };

  return (
    <form onSubmit={handleSubmit}> {/* Added onSubmit handler */}
      <input
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
