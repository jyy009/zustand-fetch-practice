import { User } from "./components/User";
import { Count } from "./components/Count"
import "./App.css";

export const App = () => {
  return (
    <>
      <h1>Zustand fetch practice</h1>
      <p>Create a store with a state that matches User.jsx</p>
      <User />
      <hr />
      <Count />
    </>
  );
};
