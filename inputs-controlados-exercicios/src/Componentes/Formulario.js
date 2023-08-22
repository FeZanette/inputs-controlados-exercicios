//declare todo o componente formulário e seus inputs. Exporte o formulário.

import styled from "styled-components";
import React from "react";

const Botao = styled.button`
  background-color: orange;
  color: white;
  margin-top: 20px;
  padding: 7px 21px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const TituloPagamento = styled.select `
    border: none;
    margin-bottom: 10px;
`

const Titulo = styled.label`
  font-size: 10px;
  color: gray;

  input {
    border: none;
    border-bottom: 1px solid black;
    margin-bottom: 8px;
    height: 24px;
    text-align: bottom;
  }
`;

export function Formulario({
  pagamento,
  nome,
  numero,
  validade,
  cvc,
  alterarPagamento,
  alterarNome,
  alterarNumero,
  alterarValidade,
  alterarCvc,
  cadastrarCartao,
}) {
  return (
    <>
      <form>
        <TituloPagamento value={pagamento} onChange={alterarPagamento}>
          <option>Forma de pagamento:</option>
          <option>Débito</option>
          <option>Crédito</option>
        </TituloPagamento>
        <br />

        <Titulo>
          Nome:
          <br />
          <input value={nome} onChange={alterarNome} placeholder="Nome" />
        </Titulo>
        <br />

        <Titulo>
          Número do cartão:
          <br />
          <input
            value={numero}
            onChange={alterarNumero}
            placeholder="Número do cartão"
          />
        </Titulo>
        <br />

        <Titulo>
          Validade:
          <br />
          <input
            value={validade}
            onChange={alterarValidade}
            placeholder="Validade"
          />
        </Titulo>
        <br />

        <Titulo>
          CVC:
          <br />
          <input value={cvc} onChange={alterarCvc} placeholder="CVC" />
        </Titulo>
        <br />

        <Botao onClick={cadastrarCartao}>Cadastrar cartão</Botao>
      </form>
    </>
  );
}
