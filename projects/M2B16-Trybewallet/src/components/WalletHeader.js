import React from 'react';
import { useSelector } from 'react-redux';

function WalletHeader() {
  const userEmail = useSelector((state) => state.user.email);
  const total = useSelector((state) => state.wallet.total);
  return (
    <header className="wallet-header">
      <span data-testid="email-field">{`Email: ${userEmail}`}</span>
      <span data-testid="total-field">{`Despesa total: R$${total.toFixed(2)}`}</span>
      <span data-testid="header-currency-field">Moeda Base: BRL</span>
    </header>
  );
}

export default WalletHeader;
