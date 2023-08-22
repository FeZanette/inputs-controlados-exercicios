import Cartao from "../Componentes/Cartao";
import { LayoutDaPagina } from "./estiloDaPaginaDoCartao";
import { Formulario } from "../Componentes/Formulario";
import React, { useState } from "react";

function PaginaDoCartao() {
  //declare os estados aqui
  const [pagamento, setPagamento] = useState("");
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [validade, setValidade] = useState("");
  const [cvc, setCvc] = useState("");

  //declare as funções de controle de inputs aqui
  function alterarPagamento(e) {
    setPagamento(e.target.value);
  }

  function alterarNome(e) {
    setNome(e.target.value);
  }

  function alterarNumero(e) {
    setNumero(e.target.value);
  }

  function alterarValidade(e) {
    setValidade(e.target.value);
  }

  function alterarCvc(e) {
    setCvc(e.target.value);
  }

  function cadastrarCartao(e) {
    e.preventDefault();
    setPagamento("");
    setNome("");
    setNumero("");
    setValidade("");
    setCvc("");
    alert("Seu cartão foi cadastrado com sucesso!")
  }

  return (
    <LayoutDaPagina>
      {/* Passe as variáveis de estado para o Cartão. Use Props. */}
      <Cartao
        pagamento={pagamento}
        numero={numero}
        nome={nome}
        cvc={cvc}
        validade={validade}
      />

      {/* Chame o Componente Formulário Aqui */}
      {/* Passe a função de controle de input e variável de estado para o formulário. Para isso use Props */}
      <Formulario
        pagamento={pagamento}
        nome={nome}
        numero={numero}
        validade={validade}
        cvc={cvc}
        alterarPagamento={alterarPagamento}
        alterarNome={alterarNome}
        alterarNumero={alterarNumero}
        alterarValidade={alterarValidade}
        alterarCvc={alterarCvc}
        cadastrarCartao={cadastrarCartao}
      />
    </LayoutDaPagina>
  );
}

export default PaginaDoCartao;
