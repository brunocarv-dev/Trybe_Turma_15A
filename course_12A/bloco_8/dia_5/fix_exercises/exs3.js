/* const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller}) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); */ // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas]

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matemática',
}; 

const { a: name, b: classAssigned, c: subject } = student;
console.log(name, classAssigned, subject);