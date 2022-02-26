import logo from './logo.svg';
import './App.css';

// Os componentes que servirão de valores para outros componentes devem ser retornados pela função que os abarca.
const Texto = (props) => {
  return (
  <div>
    <h1>{props.nome2}</h1>
    <h3>{props.nome3}</h3>
  </div>  
    );
}; 

// Para cada componente JSX há uma função
function App() {
// Entenda que valores lógicos devem ser introduzidos nos componentes a partir da implementação da sintaxe de objetos '{ ... }'  
  const nome = 'Hello world1';
  return (
    <section>
      <Texto nome2 = 'Bruno'></Texto>
      <Texto nome2 = {nome} ></Texto>
      <Texto nome3 = 'Massacration!' ></Texto>
      <Texto nome2 = 'Massacrationnn!!!' ></Texto>
      <p> Elemento criado dentro do return </p>
    </section>
  )
}

export default App;
