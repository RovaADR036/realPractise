import { useState } from "react";

function FormulaireValidatio() {
  const [formData, setFormData] = useState({});
  const [nameState, setNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const handleValidate = (e) => {
    e.preventDefault();
    setFormData({
      name: nameState,
      email: emailState,
      password: passwordState,
    });
  };
  return (
    <>
      <form action="">
        <label htmlFor="name">Nom:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={nameState}
          onChange={(e) => setNameState(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={emailState}
          onChange={(e) => setEmailState(e.target.value)}
        />
        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={passwordState}
          onChange={(e) => setPasswordState(e.target.value)}
        />
        <button onClick={handleValidate} type="submit">
          Envoyer
        </button>
      </form>

      {formData && (
        <div>
          <h3>Form Data:</h3>
          <p>Nom: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Mot de passe: {formData.password}</p>
        </div>
      )}
    </>
  );
}

export default FormulaireValidatio;
