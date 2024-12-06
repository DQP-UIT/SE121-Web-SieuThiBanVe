import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useAuth = create(
  persist(
    (set, get) => ({
      user: undefined,
      token: undefined, // Lưu token vào trạng thái
      setUser: (user: any) => set({ user }),
      setToken: (token: string) => set({ token }), // Hàm để lưu token
      logout: () => set({ user: undefined, token: undefined }), // Xóa user và token khi logout
    }),
    {
      name: "auth-storage", // tên của item trong storage
      storage: createJSONStorage(() => sessionStorage), // Sử dụng sessionStorage để lưu trữ
    },
  ),
);
