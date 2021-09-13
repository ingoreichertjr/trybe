import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpen, updateTotal } from '../actions';
import { Input, Select, Button } from './form-components';

const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

const initialInputState = {
  value: '0',
  currency: 'USD',
  method: methods[0],
  tag: tags[0],
  description: '',
};

const addExpense = async (dispatch, expensesList, setState, state) => {
  const payload = {
    id: expensesList.length === 0 ? 0 : expensesList[expensesList.length - 1].id + 1,
    ...state,
  };
  await dispatch(addExpen(payload));
  dispatch(updateTotal());
  setState(initialInputState);
};

const handleChange = (setInputs, { id, value }) => {
  const key = id.split('-')[0];
  setInputs((state) => ({ ...state, [key]: value }));
};

function WalletAddForm() {
  const dispatch = useDispatch();
  const currencies = useSelector((state) => state.wallet.currencies);
  const expensesList = useSelector((state) => state.wallet.expenses);
  const [inputs, setInputs] = useState(initialInputState);
  return (
    <form className="wallet-add-form">
      <Input
        label="Valor:"
        id="value-input"
        type="number"
        value={ inputs.value }
        onChange={ ({ target }) => handleChange(setInputs, target) }
      />
      <Select
        label="Moeda:"
        id="currency-input"
        value={ inputs.currency }
        onChange={ ({ target }) => handleChange(setInputs, target) }
        options={ currencies }
      />
      <Select
        label="Método de pagamento:"
        id="method-input"
        value={ inputs.method }
        onChange={ ({ target }) => handleChange(setInputs, target) }
        options={ methods }
      />
      <Select
        label="Tag:"
        id="tag-input"
        value={ inputs.tag }
        onChange={ ({ target }) => handleChange(setInputs, target) }
        options={ tags }
      />
      <Input
        label="Descrição:"
        id="description-input"
        type="text"
        value={ inputs.description }
        onChange={ ({ target }) => handleChange(setInputs, target) }
      />
      <Button
        text="Adicionar despesa"
        classN="wallet-form-add"
        onClick={ () => addExpense(dispatch, expensesList, setInputs, inputs) }
      />
    </form>
  );
}

export default WalletAddForm;
