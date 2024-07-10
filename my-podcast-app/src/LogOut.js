import { getAuth, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

function logOut() {
  signOut(auth)
    .then(() => {
      console.log("User logged out");
    })
    .catch((error) => {
      console.error("Error logging out:", error);
    });
}
