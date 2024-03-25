import { create } from "zustand";

interface IUser {
    id: string;
    username: string;
    email: string;
    avatar: string;
    diamond: number;
}

const initialState: IUser = {
    id: "",
    username: "",
    email: "",
    avatar: "",
    diamond: 0,
};

interface userStore {
    user: IUser;
    setEmail: (email: string) => void;
    setUsername: (username: string) => void;
    updateUserNameAvatar: (username: string, avatar: string) => void;
    setAvatar: (avatar: string) => void;
    setDiamond: (diamond: number) => void;
    setDiamondMin: (diamond: number) => void | undefined;
}

const userStore = create<userStore>((set) => ({
    user: initialState,
    setEmail: (email: string) => set((state) => ({ user: { ...state.user, email } })),

    setUsername: (username: string) => set((state) => ({ user: { ...state.user, username } })),

    updateUserNameAvatar: (username: string, avatar: string) => set((state) => ({ user: { ...state.user, username, avatar } })),

    setAvatar: (avatar: string) => set((state) => ({ user: { ...state.user, avatar } })),

    setDiamond: (diamond: number) => set((state) => ({ user: { ...state.user, diamond } })),

    setDiamondMin: (diamond: number) => set((state) => ({ user: { ...state.user, diamond: state.user.diamond - diamond } })),
}));

export default userStore;
