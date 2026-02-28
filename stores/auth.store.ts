import { defineStore } from "pinia";
import type { User } from "~/interfaces/user.interface";

export const useAuthStore = defineStore(
    "auth",
    () => {
        const token = ref<string | undefined>();
        const user = ref<User | undefined>();

        const setToken = (value: string) => {
            token.value = value;
        };

        const setUserData = (userData: User) => {
            user.value = userData;
        };

        const clearToken = () => {
            token.value = undefined;
        };

        return {
            token,
            user,
            setToken,
            setUserData,
            clearToken,
        };
    },
    {
        persist: true,
    },
);
