const Counter = () => {
  const [contador, setCounter] = React.useState(0);

  const aumentar = () => setCounter(contador + 1);
  const disminuir = () => setCounter(contador - 1);
  return (
    <div>
      <h1>Counter: {contador} </h1>
      <hr />

      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Aumentar</button>
    </div>
  );
};
