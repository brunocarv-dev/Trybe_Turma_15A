import Daughter from './Daughter';

function Father(props) {
  return (
    <Daughter
      inheritance={props.inheritance}
      spendInheritance={props.spendInheritance}
    />
  );
}

export default Father;
