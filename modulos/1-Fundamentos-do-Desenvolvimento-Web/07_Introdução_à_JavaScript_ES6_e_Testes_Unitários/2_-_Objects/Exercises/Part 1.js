const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = () => {
  // Adicione abaixo as informações necessárias.
  const ana = order.order.delivery.deliveryPerson;
  const address = Object.values(order.address);
  const resp1 = `Olá ${ana}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}`;
  const resp2 = `, ${address[0]}, Nº: ${address[1]}, AP: ${address[2]}`;
  console.log(resp1 + resp2);
};

// customerInfo();

const orderModifier = () => {
  // Adicione abaixo as informações necessárias.
  const nome = order.name = 'Luiz Silva';
  const aux = Object.keys(order.order.pizza);
  const pizza1 = aux[0];
  const pizza2 = aux[1]
  const drink = order.order.drinks.coke.type;
  const total = order.payment.total = 50
  console.log(`Olá ${nome}, o total do seu pedido de ${pizza1}, ${pizza2} e ${drink} é R$${total},00.`);
};

// orderModifier()