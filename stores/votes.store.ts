import { defineStore } from "pinia";
import type { Post } from "~/interfaces/post.interface";

export const useVotesStore = defineStore(
    "votes",
    () => {
        const config = useRuntimeConfig();
        const API_URL = config.public.apiurl;
        const votes = ref<Record<number, "like" | "dislike">>({});

        const like = async (id: number) => {
            votes.value[id] = "like";
            return await $fetch<Post>(`${API_URL}/posts/${id}/like`, {
                method: "POST",
            });
        };

        const dislike = async (id: number) => {
            votes.value[id] = "dislike";
            return await $fetch<Post>(`${API_URL}/posts/${id}/dislike`, {
                method: "POST",
            });
        };

        const isLike = (id: number) => {
            return votes.value[id] === "like";
        };

        const isDislike = (id: number) => {
            return votes.value[id] === "dislike";
        };

        return {
            votes,
            like,
            dislike,
            isLike,
            isDislike,
        };
    },
    {
        persist: {
            storage: piniaPluginPersistedstate.localStorage(),
        },
    },
);
