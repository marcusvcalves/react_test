import "./App.css";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#08 Renderização Condicional" color="#982395">
        <ParOuImpar numero={20}></ParOuImpar>
        <ParOuImpar numero={21}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Fernando" }} />
        <UsuarioInfo usuario={{ email: "fer@nando.com" }} />
      </Card>
      <Card titulo="#07 Tabela Produtos" color="#008b8b">
        <TabelaProdutos />
      </Card>
      <Card titulo="#06 Repetição" color="#FF4C65">
        <ListaAlunos />
      </Card>
      <Card titulo="#05 Componente com Filhos " color="#00C8F8">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>
      <Card titulo="#04 Desafio Aleatório" color="#080">
        <Aleatorio max={60} min={1} />
      </Card>
      <Card titulo="#03 Fragmento" color="#fe4a49">
        <Fragmento></Fragmento>
      </Card>
      <Card titulo="#02 Com Parametro" color="#2ab7ca">
        <ComParametro nome="Marcus Vinícius" nota={9.3} />
      </Card>
      <Card titulo="#01 Primeiro Componente" color="#fed766">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
