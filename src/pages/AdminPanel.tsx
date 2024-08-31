import React from "react";
import { auth } from "../firebase/firebase";

import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase/firebase";

import { motion } from "framer-motion";

import "../styles/admin.scss";
import { Button } from "antd";
import FormVerifyTable from "../components/FormVerifyTable";

export default function AdminPanel() {
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState<TUsersFirestore[]>([]);
  const { setCurrentUser } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    const usersCollection = collection(db, "formUsers");
    const fetchUsers = async () => {
      const usersSnapshot = await getDocs(usersCollection);
      if (!usersSnapshot.empty) {
        console.log(
          "Document data:",
          usersSnapshot.docs.map((doc) => doc.data())
        );
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

      const usersList = usersSnapshot.docs.map((doc) => doc.data());
      setUsers(usersList as unknown as TUsersFirestore[]);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  // console.log(users);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <motion.section
      className="verify-page"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
    >
      <nav>
        <h1>
          <span className="primary-text-color">ANANT</span>
          &nbsp;ADMIN PANEL
        </h1>
        <Button
          className="signout-btn"
          type="primary"
          onClick={async () => {
            try {
              await auth.signOut();
              setCurrentUser(null);
              navigate("/admin/login");
            } catch (error) {
              console.error(error);
              alert(error);
            }
          }}
        >
          SignOut
        </Button>
      </nav>
      <FormVerifyTable users={users} setUsers={setUsers} />
    </motion.section>
  );
}
