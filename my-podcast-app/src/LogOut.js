import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

function logOut() {
  return signOut(auth)
    .then(() => {
      console.log("User logged out");
    })
    .catch((error) => {
      console.error("Error logging out:", error);
      throw error; // Optional: Throw error to handle in UI if needed
    });
}

const LogoutButton = () => {
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Optional: Handle any post-logout actions like redirecting or updating state
      })
      .catch((error) => {
        // Optional: Handle logout error
        // You can show an error message to the user
      });
  };

  return <button onClick={handleLogout}>Log Out</button>; // Added onClick handler
};

export default LogoutButton;
