import React, { Component } from 'react';
import Estados from './Estados';
import Submit from './Submit';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
      estados: 'AC',
      tipo: '',
      resumo: '',
      cargo: '',
      descrição: '',
      submitted: false,
    }
  }

  handleChange = ({target}) => {
    const {name, value} = target

    this.setState({[name]: value})

    if (name === 'nome') this.setState({[name]: value.toUpperCase()})

    if (name === 'endereço') this.setState({[name]: value.replace(/[^a-zA-Z0-9]/g, '')})

    if (name === 'tipo') {
      document.getElementsByName('tipo').forEach(i => {
        if (i.checked) this.setState({[name]: i.value})
      })
    }
  }

  mouseEnter = () => {
    alert('Preencha com cuidado esta informação.')
  }

  checkCity = ({target}) => {
    if (target.value.match(/^\d/)) this.setState({cidade: ''})
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const isValid = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)

    if (!isValid) {
      alert('Email inválido')
      return <div></div>
    } else {
      this.setState({submitted: true})
    }
  }

  render() {
    const {nome, email, cpf, endereço, cidade, estado, resumo, cargo, descrição, submitted} = this.state
    const {handleChange, handleSubmit, mouseEnter, checkCity} = this
    return (
      <>
        <h1>Formulário de Cadastro de Currículo</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="Nome">
              Nome: <input type="text" value={nome} name="nome" maxLength="40" onChange={handleChange} required/>
            </label>
            <label htmlFor="Email">
              Email: <input type="text" value={email} name="email" maxLength="50" onChange={handleChange} required/>
            </label>
            <label htmlFor="CPF">
              CPF: <input type="text" value={cpf} name="cpf" maxLength="11" onChange={handleChange} required/>
            </label>
            <label htmlFor="Endereço">
              Endereço: <input type="text" value={endereço} name="endereço" maxLength="200" onChange={handleChange} required/>
            </label>
            <label htmlFor="Cidade">
              Cidade: <input type="text" value={cidade} name="cidade" maxLength="28" onChange={handleChange} onBlur={checkCity} required/>
            </label>
            <select name="estados" value={estado} id="estados" onChange={handleChange} required>
              <Estados />
            </select>
            <label htmlFor="Casa">
              <input type="radio" value="Casa" name="tipo" id="Casa" onChange={handleChange} required/>Casa
            </label>
            <label htmlFor="Apartamento">
              <input type="radio" value="Apartamento" name="tipo" id="Apartamento" onChange={handleChange} required/>Apartamento
            </label>
          </fieldset>
          <fieldset>
            <textarea name="resumo" value={resumo} cols="30" rows="10" maxLength="1000" placeholder="Resumo do currículo" onChange={handleChange} required/>
            <textarea name="cargo" id='cargo' value={cargo} cols="30" rows="10" maxLength="40" placeholder="Cargo" onChange={handleChange} onMouseEnter={mouseEnter} required/>
            <textarea name="descrição" value={descrição} cols="30" rows="10" maxLength="500" placeholder="Descrição do Cargo" onChange={handleChange} required/>
          </fieldset>
          <button type="submit">Enviar</button>
          <button type="reset">Limpar</button>
        </form>
        {submitted ? <Submit {...this.state} /> : <div/>}
      </>
    );
  }
}
 
export default Form;