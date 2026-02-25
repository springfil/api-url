<template>
    <div>
        <PostCard v-if="postData" v-bind="postData" />
        <div v-else>Загрузка...</div>
    </div>
</template>

<script lang="ts" setup>
import type { Post } from "~/interfaces/product.interface";

const config = useRuntimeConfig();
const route = useRoute();
const API_URL = config.public.apiurl;

const postId = route.params.id;

const { data: postData } = await useFetch<Post>(API_URL + `/posts/${postId}`);
</script>

<style></style>
