export default function ComParametro(props) {
  let str = "";
  if (props.nota >= 6) {
    str = "aprovado";
  } else {
    str = "reprovado";
  }
  return (
    <div>
      <h1>ComParametro</h1>
      <h2>
        {props.nome} tem nota {props.nota} e está {str}
      </h2>
    </div>
  );
}
