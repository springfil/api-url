<template>
    <PostEdit :post="post ?? undefined" />
</template>

<script lang="ts" setup>
import type { Post } from "~/interfaces/post.interface";

const route = useRoute();
const id = ref(route.params.id);
definePageMeta({ middleware: "auth" });

useSeoMeta({
    title: `Редактирование поста [${id.value}]`,
    description: "Страница редактирования поста в VoteApp приложении",
});

const { API_URL } = useApi();
const { data: post } = await useFetch<Post>(`${API_URL}/posts/${id.value}`);
</script>

<style></style>
