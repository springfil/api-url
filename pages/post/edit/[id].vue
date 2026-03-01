<template>
    <div>Редактирование поста {{ id }}</div>
</template>

<script lang="ts" setup>
const route = useRoute();
const id = ref(route.params.id);
definePageMeta({ middleware: "auth" });

useSeoMeta({
    title: `Редактирование поста [${id.value}]`,
    description: "Страница редактирования поста в VoteApp приложении",
});
</script>

<style></style>
