import { useState } from "react";
function BouttonFacteur() {
  const [facteur, setFacteur] = useState(0);
  return (
    <div>
      <p>
        ecouteur de changement dans
        <strong> nombre de changement = {facteur} </strong>
      </p>

      <button onClick={() => setFacteur(facteur + 1)}>
        {" "}
        appuiez est voir le changement
      </button>
    </div>
  );
}

export default BouttonFacteur;
