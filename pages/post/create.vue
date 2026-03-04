<template>
    <PostEdit />
</template>

<script lang="ts" setup>
definePageMeta({ middleware: "auth" });

useSeoMeta({
    title: "Создание поста",
    description: "Страница создания поста в VoteApp приложении",
});
</script>

<style></style>
