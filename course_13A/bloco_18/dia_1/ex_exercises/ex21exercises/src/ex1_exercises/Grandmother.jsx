import Father from './Father';

function Grandmother(props) {
  return (
    <Father
      inheritance={props.inheritance}
      spendInheritance={props.spendInheritance}
    />
  );
}

export default Grandmother;
