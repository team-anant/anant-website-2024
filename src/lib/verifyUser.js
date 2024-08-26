import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export async function verifyUser(id, setUsers) {
  console.log(id);
  const userRef = doc(db, "formUsers", id);
  try {
    await updateDoc(userRef, {
      verified: true,
    });
    setUsers((prev) => {
      return prev.map((user) => {
        if (user.id === id) {
          return { ...user, verified: true };
        }
        return user;
      });
    });
  } catch (error) {
    console.error("Error updating document: ", error);
    alert("Error updating document: ", error);
  }
  //   alert("User verified successfully");
}

export async function unverifyUser(id, setUsers) {
  console.log(id);
  const userRef = doc(db, "formUsers", id);
  try {
    await updateDoc(userRef, {
      verified: false,
    });
    setUsers((prev) => {
      return prev.map((user) => {
        if (user.id === id) {
          return { ...user, verified: false };
        }
        return user;
      });
    });
  } catch (error) {
    console.error("Error updating document: ", error);
    alert("Error updating document: ", error);
  }
  //   alert("User unverified successfully");
}
