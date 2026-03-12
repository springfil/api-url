import type { EditPostBody, Post } from "~/interfaces/post.interface";

export const usePostsApi = () => {
    const authStore = useAuthStore();
    const { API_URL } = useApi();

    const save = async (body: EditPostBody, id?: Post["id"]) => {
        if (!authStore.token) {
            return null;
        }

        const method = id ? "PUT" : "POST";
        const url = id ? `edit/${id}` : "create";
        const headers = {
            Authorization: `Bearer ${authStore.token}`,
        };

        try {
            return await $fetch<Post>(`${API_URL}/posts/${url}`, {
                method,
                body,
                headers,
            });
        } catch {
            return null;
        }
    };

    const remove = async (id: Post["id"]) => {
        if (!authStore.token) {
            return false;
        }
        const headers = {
            Authorization: `Bearer ${authStore.token}`,
        };
        try {
            await $fetch<Post>(`${API_URL}/posts/${id}`, {
                method: "DELETE",
                headers,
            });
            return true;
        } catch {
            return false;
        }
    };

    return { save, remove };
};
