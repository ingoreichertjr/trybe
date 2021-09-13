import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WalletHeader, WalletAddForm, WalletEditForm,
  ExpensesTable } from '../components';
import './Wallet.css';
import { fetchCurrencies } from '../actions';

function Wallet() {
  const dispatch = useDispatch();
  const currencyList = useSelector((state) => state.wallet.currencies);
  const editMode = useSelector((state) => state.wallet.editMode);
  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  // if (currencyList.length === 0) {
  //   return (
  //     <div className="wallet-loading">
  //       <h3>Buscando moedas no servidor...</h3>
  //       <p>
  //         Ps: Se demorar muito talvez o servidor esteja com problemas,
  //         melhor tentar novamente mais tarde
  //         <span role="img" aria-label="emoji">😉</span>
  //         .
  //       </p>
  //     </div>
  //   );
  // }

  if (editMode.status) {
    return (
      <>
        <WalletHeader />
        <WalletEditForm currencies={ currencyList } id={ editMode.id } />
        <ExpensesTable />
      </>
    );
  }

  return (
    <>
      <WalletHeader />
      <WalletAddForm />
      <ExpensesTable />
    </>
  );
}

export default Wallet;
