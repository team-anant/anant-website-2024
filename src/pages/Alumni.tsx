import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import AlumniRegistration from "../components/AlumniRegistration";
import "../styles/alumni.scss";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Image } from "antd";

export default function Alumni() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alumniData, setAlumniData] = useState<TUsersFirestore[]>([]);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchAlumniData = async () => {
      const usersCollection = collection(db, "formUsers");
      const querySnapshot = query(
        usersCollection,
        where("verified", "==", true)
      );
      const usersSnapshot = await getDocs(querySnapshot);
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
      setAlumniData(usersList as unknown as TUsersFirestore[]);
    };

    fetchAlumniData();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
      className="alumni-section"
    >
      <AlumniRegistration
        isModalOpen={isModalOpen}
        // handleOk={handleOk}
        setIsModalOpen={setIsModalOpen}
        handleCancel={handleCancel}
      />
      <aside className="alumni-hero">
        <button onClick={() => setIsModalOpen(true)}>
          Register as Alumnus
        </button>
        <div className="alumni-hero-text">
          <h1>
            OUR <span>&nbsp;ALUMNI</span>
          </h1>
        </div>
      </aside>
      <div className="alumni-list-section">
        <ul>
          {alumniData.map((alumnus) => (
            <li key={alumnus.id}>
              <div className="alumni-card">
                <div className="alumni-image">
                  <Image
                    width={150}
                    src={
                      alumnus.imageUrl ||
                      "https://i.seadn.io/gae/y2QcxTcchVVdUGZITQpr6z96TXYOV0p3ueLL_1kIPl7s-hHn3-nh8hamBDj0GAUNAndJ9_Yuo2OzYG5Nic_hNicPq37npZ93T5Nk-A?auto=format&dpr=1&w=1000"
                    }
                    alt={alumnus.name}
                  />
                </div>
                <div className="alumni-details">
                  <a href={alumnus.linkedIn} target="_blank">
                    {alumnus.name}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
