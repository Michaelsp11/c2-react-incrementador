export const Boton = (props) => {
  const { simbolo, numero, setNumero } = props;
  const cambiarNumero = () => {
    if (simbolo === "+") {
      if (numero < 10) {
        setNumero(numero + 1);
      }
    } else {
      if (numero > 0) {
        setNumero(numero - 1);
      }
    }
  };
  return <button onClick={cambiarNumero}>{simbolo}</button>;
};
