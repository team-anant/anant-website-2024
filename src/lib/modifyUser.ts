import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase/firebase";
import React from "react";
import { FirebaseError } from "firebase/app";
import { deleteObject, ref } from "firebase/storage";

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
  const userRef = doc(db, "formUsers", id);
  try {
    // Delete the images from storage
    const doc = await getDoc(userRef);
    if (doc.exists()) {
      if (doc.data().imageUrl !== null) {
        const storageRef = ref(storage, `pictures/${id}`);
        await deleteObject(storageRef);
      }
    }

    // Delete user
    await deleteDoc(userRef);

    // Local state update
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
