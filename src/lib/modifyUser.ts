import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import React from "react";
import { FirebaseError } from "firebase/app";

export async function verifyUser(
  id: string,
  setUsers: React.Dispatch<React.SetStateAction<TUsersFirestore[]>>
) {
  console.log(id);
  const userRef = doc(db, "formUsers", id);
  try {
    await updateDoc(userRef, {
      verified: true,
    });
    setUsers((prev: TUsersFirestore[]) => {
      return prev.map((user) => {
        if (user.id === id) {
          return { ...user, verified: true };
        }
        return user;
      });
    });
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.error("Error updating document: ", error);
      alert("Error updating document: " + error.name);
    }
  }
  //   alert("User verified successfully");
}

export async function unverifyUser(
  id: string,
  setUsers: React.Dispatch<React.SetStateAction<TUsersFirestore[]>>
) {
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
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.error("Error updating document: ", error);
      alert("Error updating document: " + error.message);
    }
  }
  //   alert("User unverified successfully");
}

export async function deleteUser(
  id: string,
  setUsers: React.Dispatch<React.SetStateAction<TUsersFirestore[]>>
) {
  console.log(id);
  const userRef = doc(db, "formUsers", id);
  try {
    await deleteDoc(userRef);
    setUsers((prev) => {
      return prev.filter((user) => user.id !== id);
    });
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.error("Error updating document: ", error);
      alert("Error updating document: " + error.message);
    }
  }
  //   alert("User deleted successfully");
}
