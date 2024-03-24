import { create } from "zustand";

interface ICounter {
    count: number;
}

interface ICounterStore {
    count: ICounter;
    increment: () => void;
}

const initialState: ICounter = {
    count: 0,
};

export const useCounterStore = create<ICounterStore>((set) => ({
    count: initialState,
    increment: () => set((state) => state),
}));
