import { collection, doc, setDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { db } from "../firebase/firebase";

export default function Alumni() {
  const addUser = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    const formUsersCollection = collection(db, "formUsers");
    const newUserRef = doc(formUsersCollection);

    try {
      await setDoc(newUserRef, {
        id: newUserRef.id,
        name: "Test User",
        personalMail: "abiaeenvaejv@gmail.com",
        bitsMail: "f2022e983rh39@pilani.bits-pilani.ac.in",
        anantPosition: "Member",
        currentPosition: "Software Engineer",
        team: "Frontend",
        achievements: "So many achievements",
        imageUrls: [
          "https://images.unsplash.com/photo-1631055754222-3b3c2f3d9f8a",
          "https://images.unsplash.com/photo-1631055754222-3b3c2f3d9f8a",
        ],
        verified: false,
      });
      alert("User added successfully");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
    >
      <form onSubmit={addUser}>
        <button type="submit">Submit</button>
      </form>
    </motion.div>
  );
}
