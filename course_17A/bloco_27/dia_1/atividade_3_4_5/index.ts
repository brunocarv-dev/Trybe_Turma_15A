class Client {
  private _name: string = String();
  
  constructor(name: string) {
    this.name = name;
  }
  
  public get name(): string {
    return this._name;
  }
  
  public set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve ter no mínimo 3 caracteres');
    }

    this._name = value;
  }
}

class OrderItem {
  private _name: string = String();
  private _price: number = Number();
  
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  
  public get name(): string {
    return this._name;
  }
  
  public set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres');
    }

    this._name = value;
  }

  public get price(): number {
    return this._price;
  }
  
  public set price(value: number) {
    if (value < 0) {
      throw new Error('O preço deve ser positivo.')
    }

    this._price = value;
  }
}

class Order {
  private _client: Client;
  private _items: OrderItem[] = Array();
  private _paymentMethod: string;
  private _discount = 0;
  
  constructor (client: Client, items: OrderItem[], paymentMethod: string, discount: number) {
    this._client = client;
    this.items = items;
    this._paymentMethod = paymentMethod;
    this.discount = discount;
  }
  
  public get client(): Client {
    return this._client;
  }
  
  public set client(value: Client) {
    this._client = value;
  }
  
  public get items(): OrderItem[] {
    return this._items;
  }
  
  public set items(value: OrderItem[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo menos um item.');
    }

    this._items = value;
  }
  
  public get paymentMethod(): string {
    return this._paymentMethod;
  }
  
  public set paymentMethod(value: string) {
    this._paymentMethod = value;
  }
  
  public get discount() {
    return this._discount;
  }
  
  public set discount(value) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }
    this._discount = value;
  } 
}

const client = new Client('João');

const sandwiche = new OrderItem('Sandwiche Natural', 5.00)
const juice = new OrderItem('Suco de Abacaxi', 5.00);
const dessert = new OrderItem('Gelatina de uva', 2.50);

const order = new Order(client, [sandwiche, juice, dessert], 'dinheiro', 0.10)

console.log(order);