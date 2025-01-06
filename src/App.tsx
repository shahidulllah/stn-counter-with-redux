import { Button } from "./components/ui/button";
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
    <div className="flex flex-col justify-center items-center space-y-3">
      <h1 className="text-2xl font-bold">Counter with Redux</h1>

      <Button onClick={handleDecrement}>Decrement</Button>

      <div>{value}</div>

      <Button onClick={() => handleIncrement(1)}>Increment</Button>

      <Button onClick={() => handleIncrement(5)}>Increment by 5</Button>
    </div>
  );
}

export default App;
