import { useState } from "react";
import { Boton } from "./componentes/Boton.js";
import { Input } from "./componentes/Input.js";
function App() {
  const menos = "-";
  const mas = "+";
  const [numero, setNumero] = useState(0);
  return (
    <>
      <Boton simbolo={menos} numero={numero} setNumero={setNumero} />
      <Input numero={numero} />
      <Boton simbolo={mas} numero={numero} setNumero={setNumero} />
    </>
  );
}

export default App;
