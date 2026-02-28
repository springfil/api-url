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

        const clearToken = () => {
            token.value = undefined;
        };

        return {
            token,
            user,
            setToken,
            clearToken,
        };
    },
    {
        persist: true,
    },
);
