import { deccrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = () => {
    dispatch(deccrement());
  };
  return (
    <div>
      <h1>Counter with Redux</h1>

      <button onClick={handleDecrement}>Decrement</button>

      <div>{value}</div>

      <button onClick={() => handleIncrement(1)}>Increment</button>

      <button onClick={() => handleIncrement(5)}>Increment by 5</button>
    </div>
  );
}

export default App;
