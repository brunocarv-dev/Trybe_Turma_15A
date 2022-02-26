function Daughter(props) {
  return (
    <div>
      <span>
        `Tenho uma herança de R$ ${props.inheritance} que recebi do meu bisavô`
      </span>
      <button type="button" onClick={props.spendInheritance}/>
    </div>
  );
}

export default Daughter;
