import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { db } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const addNewEmail = async () => {
    try {
      const userCollection = collection(db, "users");
      const newEmail = {
        email,
      };
      await addDoc(userCollection, newEmail);
    } catch (errMsg) {
      throw new Error(`Add email error: ${errMsg}`);
    }
  };

  const userInCollectionSize = async () => {
    const collectionRef = collection(db, "users");
    const q = query(collectionRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.length;
  };

  const handleLogin = async () => {
    try {
      const userCollectionSize = await userInCollectionSize();
      if (userCollectionSize === 0) await addNewEmail();

      localStorage.setItem("userEmail", email);
      navigate("/products");
    } catch (errMsg) {
      console.log("Se ha encontrado un error al buscar un usuario", errMsg);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
        </label>
        <button type="submit" className="login-button">
          Entrar
        </button>
      </form>
    </div>
  );
}
