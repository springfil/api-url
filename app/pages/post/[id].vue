<template>
    <div>
        <PostCard v-if="postData" v-model:post="postData" />
        <div v-else>Загрузка...</div>
    </div>
</template>

<script lang="ts" setup>
import { useApi } from "~/composables/useApi";
import type { Post } from "~/interfaces/post.interface";

const { API_URL } = useApi();
const route = useRoute();

const postId = route.params.id;

const { data: postData } = await useFetch<Post>(API_URL + `/posts/${postId}`, { deep: true });

const contentDescription = computed(() => {
    if (!postData.value) return;
    return postData.value.content.length <= 100
        ? postData.value.content
        : postData.value.content.substring(0, 97) + "...";
});

useSeoMeta({
    title: `Пост - ${postData.value?.title}`,
    description: contentDescription.value,
});
</script>

<style></style>
