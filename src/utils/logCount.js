import { useCount } from "../stores/useCount";

export const logCount = () => {
  const state = useCount.getState();
  console.log("logged count:", state.count);
};
