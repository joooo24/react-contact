import { create } from "zustand";

const usePhoneBookStore = create((set) => ({
    phoneBook: [],
    addContact: (name, phoneNumber) => set((state) => ({
        phoneBook: [...state.phoneBook, {id:Date.now(),name, phoneNumber}]
    })),
    deleteContact: (id) => set((state) => ({
        phoneBook: state.phoneBook.filter((el) => el.id !== id)
    }))
}));

export default usePhoneBookStore;