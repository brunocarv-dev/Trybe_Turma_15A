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
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

/* const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const name1 = order.order.delivery.deliveryPerson;
  const name2 = order.name;
  const tel = order.phoneNumber;
  const rua = order.address.street;
  const num = order.address.number;
  const ap = order.address.apartment;
  console.log(`Olá ${name1}, entrega para: ${name2}, Telefone: ${tel}, R. ${rua}, Nº: ${num}, AP: ${ap}`);
};

customerInfo(order); */

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.order.name = 'Luiz Silva';
  order.order.payment = 'R$ 50,00';
  order.order.pizza[0] = 'muzzarella';
  order.order.pizza[1] = 'pepperoni';
  const bebs = order.order.drinks.coke.type;

  console.log(`Olá ${order.order.name}, o total do seu pedido de ${order.order.pizza[0]}, ${order.order.pizza[1]} e ${bebs} é ${order.order.payment}.`);
}

orderModifier(order);

/* Agora você vai fazer alguns exercícios de fixação.
1_Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
° Note que o parâmetro da função já está sendo passado na chamada da função.
2_Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
° Modifique o nome da pessoa compradora.
° Modifique o valor total da compra para R$ 50,00. */