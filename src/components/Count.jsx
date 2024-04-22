import { logCount } from "../utils/logCount";
import { useCount } from "../stores/useCount";

export const Count = () => {
  const { count, increment, decrement, reset } = useCount();

  return (
    <div>
      <h2>Count </h2>
      <p>count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={logCount}>Log</button>
    </div>
  );
};
