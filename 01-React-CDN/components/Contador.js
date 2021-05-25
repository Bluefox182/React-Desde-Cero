const Counter = () => {
  const [contador, setCounter] = React.useState(0);
  console.log(contador);
  return (
    <div>
      <h1>Counter: {contador} </h1>
      <hr />

      <button>Aumentar</button>
      <button>Disminuir</button>
    </div>
  );
};
