import { create } from "zustand";

export const useCount = create((set, get) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => {
    console.log("count before reset:", get().count);
    set({ count: 0 });
  },
}));
