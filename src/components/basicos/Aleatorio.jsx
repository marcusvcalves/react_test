import React from "react";

export default (props) => {
  const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (max - min + 1)) + min;
  return (
    <React.Fragment>
      <h2>Valor Aleatório</h2>
      <p>Valor Mínimo: {min}</p>
      <p>Valor Máximo: {max}</p>
      <p>Valor Aleatório: {aleatorio}</p>
    </React.Fragment>
  );
};
