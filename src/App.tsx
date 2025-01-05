import { deccrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(deccrement());
  };
  return (
    <div>
      <h1>Counter with Redux</h1>

      <button onClick={handleDecrement}>Decrement</button>
      <div>{value}</div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;
