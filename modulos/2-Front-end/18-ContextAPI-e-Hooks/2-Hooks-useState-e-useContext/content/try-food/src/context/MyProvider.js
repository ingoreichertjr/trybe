import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  /* Passo 1 */
  const [orderList, setOrderList] = useState({
    comida: [],
    bebida: [],
    sobremesa: [],
  });

  const [updateCart, setUpdateCart] = useState(false);

  const showCart = () => {
    if (updateCart) {
      setUpdateCart(false);
    } else {
      setUpdateCart(true);
    }
  };

  /* Passo 8 */
  const removeItemFromList = (orderState, indexPresentInList, itemType) => {
    const newArray = orderState.filter((o, idx) => idx !== indexPresentInList);
    setOrderList((state) => ({ ...state, [itemType]: newArray }));
  };

  /* Passo 9 */
  const updateValueItemInList = (orderState, indexPresentInList, newItem) => {
    const updatedEntry = [...orderState];
    updatedEntry.splice(indexPresentInList, 1, newItem);
    setOrderList((state) => ({ ...state, [newItem.itemType]: updatedEntry }));
  };

  /* Passo 7 */
  const manageItemsInList = (newItem) => {
    const { itemType, id, quantity } = newItem;
    const noQuantity = 0;
    const orderState = orderList[itemType];
    const indexPresentInList = orderState.findIndex((e) => e.id === id);
    if (Number(quantity) === noQuantity) {
      return removeItemFromList(orderState, indexPresentInList, itemType);
    }
    updateValueItemInList(orderState, indexPresentInList, newItem);
  };

  /* Passo 6 */
  const addItemToList = (newItem) => {
    const { itemType } = newItem;
    setOrderList((state) => (
      {
        ...state,
        [itemType]: [...state[itemType], newItem],
      }
    ));
  };

  /* Passo 2 */
  const handleChange = ({ target }, itemName, itemPrice, itemType) => {
    /* Passo 3 */
    const { value } = target;

    const newItem = {
      id: itemName,
      quantity: value,
      totalPrice: value * itemPrice,
      itemType,
    };

    /* Passo 4 */
    const isPresentInList = orderList[itemType].some((item) => item.id === itemName);

    /* Passo 5 */
    if (!isPresentInList) {
      return addItemToList(newItem);
    }
    manageItemsInList(newItem);
  };

  return (
    <MyContext.Provider value={ { handleChange, orderList, updateCart, showCart } }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MyProvider;
