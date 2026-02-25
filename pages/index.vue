<template>
    <div>
        <PostCard
            v-for="post in postsData?.posts"
            :key="post.id"
            v-bind="post"
        />
    </div>
</template>

<script lang="ts" setup>
import type { GetPostsResponse } from "~/interfaces/product.interface";

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;

const { data: postsData } = await useFetch<GetPostsResponse>(
    API_URL + "/posts",
);
</script>

<style></style>
