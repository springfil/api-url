<template>
    <div>
        <PostCard v-if="postData" v-bind="postData" />
        <div v-else>Загрузка...</div>
    </div>
</template>

<script lang="ts" setup>
import { useApi } from "~/composables/useApi";
import type { Post } from "~/interfaces/product.interface";

const { API_URL } = useApi();
const route = useRoute();

const postId = route.params.id;

const { data: postData } = await useFetch<Post>(API_URL + `/posts/${postId}`);
</script>

<style></style>
