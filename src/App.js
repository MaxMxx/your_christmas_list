import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PasswordPage from "./components/PasswordPage"; // Assure-toi que le chemin d'import est correct
import "./App.css";
import GlobalWrapper from "./components/GlobalWrapper"; // Importer le wrapper global

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router basename="/your_christmas_list">
      <GlobalWrapper>
        <Routes>
          <Route
            path="/"
            element={<PasswordPage setIsAuthenticated={setIsAuthenticated} />}
          />

          {/* Page protégée */}
          <Route
            path="/protected"
            element={
              isAuthenticated ? (
                <div>Page protégée - Bienvenue !</div>
              ) : (
                <Navigate to="/" />
              )
            }
          />

          {/* Rediriger si l'utilisateur tente d'accéder à une page inexistante */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </GlobalWrapper>
    </Router>
  );
}

export default App;
