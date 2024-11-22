import React, { useEffect, useState } from "react";
import GiftList from "./GiftList";
import CryptoJS from "crypto-js";

const Snowflake = () => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const xPos = Math.random() * 100;
    const animationDuration = Math.random() * (10 - 5) + 5;
    const delay = Math.random() * 5;

    setStyle({
      left: `${xPos}%`,
      animationDuration: `${animationDuration}s`,
      animationDelay: `${delay}s`,
    });
  }, []);

  return (
    <div className="snowflake" style={style}>
      ❄️
    </div>
  );
};

const PasswordPage = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const hashedPassword = process.env.REACT_APP_PASSWORD_KEY;

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const hashedEnteredPassword = CryptoJS.SHA256(password).toString();

    if (hashedPassword === hashedEnteredPassword) {
      setIsAuthenticated(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Mot de passe incorrect");
    }
  };

  const snowflakes = Array.from({ length: 50 }).map((_, index) => (
    <Snowflake key={index} />
  ));

  return (
    <div style={styles.container}>
      {isAuthenticated ? (
        <div className="test">
          {/*{snowflakes}*/}
          <h1>Ma Liste de Noël 🎁</h1>
          <GiftList />
        </div>
      ) : (
        <div style={styles.loginBox}>
          <h2>Entrez le mot de passe !</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Mot de passe"
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              Se connecter
            </button>
          </form>
          {errorMessage && <p style={styles.error}>{errorMessage}</p>}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f0f0f0",
  },
  loginBox: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  input: {
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "80%",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
};

export default PasswordPage;
