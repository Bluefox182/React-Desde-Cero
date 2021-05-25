const Counter = () => {
  const [contador, setCounter] = React.useState(0);

  const aumentar = () => setCounter(contador + 1);
  const disminuir = () => setCounter(contador - 1);
  return (
    <div>
      <h1 className={contador < 0 ? "menor" : "mayor"}>Counter: {contador} </h1>
      <hr />

      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
    </div>
  );
};
