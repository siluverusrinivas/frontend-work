
import { useState } from "react";
import "./App.css";
import LoginForm from "./features/auth/components/LoginForm";
import RegisterForm from "./features/auth/components/Register";

function App() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <main className="auth-page">
      {showRegister ? (
        <RegisterForm onShowLogin={() => setShowRegister(false)} />
      ) : (
        <LoginForm onShowRegister={() => setShowRegister(true)} />
      )}
    </main>
  );
}

export default App;
