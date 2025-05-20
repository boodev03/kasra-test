import { create } from "zustand";

interface UserStore {
  name: string;
  email: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
}

const useUserStore = create<UserStore>((set) => ({
  name: "Boo Dev",
  email: "boo.dev03@gmail.com",
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
}));

export default useUserStore;
