import React, { Component } from 'react';

class Submit extends Component {
  state = {}
  render() {
    const { nome, email, cpf, endereço, cidade, estados, tipo, resumo, cargo, descrição, } = this.props
    return (
      <>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <p>CPF: {cpf}</p>
        <p>Endereço: {endereço}</p>
        <p>Cidade: {cidade}</p>
        <p>Estado: {estados}</p>
        <p>Tipo: {tipo}</p>
        <p>Resumo: {resumo}</p>
        <p>Cargo: {cargo}</p>
        <p>Descrição: {descrição}</p>
      </>
    );
  }
}
 
export default Submit;