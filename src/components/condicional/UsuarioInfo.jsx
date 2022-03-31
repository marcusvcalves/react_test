import If from "./if";

export default (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vindo {props.usuario.nome}
      </If>
      <If test={!usuario || !usuario.nome}>Seja bem vindo amigão</If>
    </div>
  );
};
