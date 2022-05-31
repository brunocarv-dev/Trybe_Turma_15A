type FlavorsComum = 'Calabresa' | 'Frango' | 'Pepperoni';
type FlavorsVegetariana = 'Marguerita' | 'Palmito' | 'Cogumelo';
type FlavorsDoce = 'Nutela' | 'Goiabada com Queijo' | 'Mashmallow'
type Slices = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: Slices;
}

const Calabresa: Pizza = {
  flavor: 'Calabresa',
  slices: 8
}

const Marguerita: Pizza = {
  flavor: 'Marguerita',
  slices: 6
}

const Nutela: Pizza = {
  flavor: 'Nutela',
  slices: 4
}

/* console.log(Calabresa);
console.log(Marguerita);
console.log(Nutela); */

interface Comum extends Pizza {
  flavor: FlavorsComum;
  slices: Slices;
}

interface Vegetariana extends Pizza {
  flavor: FlavorsVegetariana;
  slices: Slices;
}

interface Doce extends Pizza {
  flavor: FlavorsDoce;
  slices: Slices;
}

const pizzaComum1: Comum = {
  flavor: 'Calabresa',
  slices: 8,
}

const pizzaComum2: Comum = {
  flavor: 'Frango',
  slices: 6,
}

const pizzaComum3: Comum = {
  flavor: 'Pepperoni',
  slices: 4,
}

const pizzaVegetariana1: Vegetariana = {
  flavor: 'Palmito',
  slices: 8,
}

const pizzaVegetariana2: Vegetariana = {
  flavor: 'Cogumelo',
  slices: 6,
}

const pizzaDoce: Doce = {
  flavor: 'Goiabada com Queijo',
  slices: 4,
}

console.log(pizzaDoce);