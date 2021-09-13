import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { deleteExpense, editMode, updateTotal } from '../actions';

const delExpense = (expenseId, expenses, dispatch) => {
  const filteredExpenses = expenses.filter((e) => e.id !== expenseId);
  dispatch(deleteExpense(filteredExpenses));
  dispatch(updateTotal());
};

const editExpense = (expenseId, dispatch) => {
  dispatch(editMode({ status: true, id: expenseId }));
};

const renderExpenses = (dispatch, expenses, editStatus) => (
  expenses.map((exp) => {
    const { id, description, tag, method, value, currency, exchangeRates } = exp;
    const val = parseFloat(value);
    const ask = parseFloat(exchangeRates[currency].ask);
    return (
      <tr key={ id }>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{`${val}`}</td>
        <td>{exchangeRates[currency].name.split('/')[0]}</td>
        <td>{`${ask.toFixed(2)}`}</td>
        <td>{`${(val * ask).toFixed(2)}`}</td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="edit-btn"
            disabled={ editStatus.status }
            onClick={ () => editExpense(id, dispatch) }
          >
            <AiFillEdit />
          </button>
          <button
            type="button"
            data-testid="delete-btn"
            disabled={ editStatus.status }
            onClick={ () => delExpense(id, expenses, dispatch) }
          >
            <AiFillDelete />
          </button>
        </td>
      </tr>
    );
  })
);

const renderErrorMessage = (error) => {
  if (error) {
    return (
      <h3 className="wallet-add-error">
        Não conseguimos acessar o servidor para a adicionar sua despesa neste momento,
        por favor tente novamente mais tarde.
      </h3>
    );
  }
};

function ExpensesTable() {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.wallet.expenses);
  const editStatus = useSelector((state) => state.wallet.editMode);
  const error = useSelector((state) => state.wallet.error);

  return (
    <>
      <table className="wallet-table">
        <tbody>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          { renderExpenses(dispatch, expenses, editStatus) }
        </tbody>
      </table>
      { renderErrorMessage(error) }
    </>
  );
}

export default ExpensesTable;
