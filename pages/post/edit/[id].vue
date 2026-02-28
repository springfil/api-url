<template>
    <div>Редактирование поста {{ id }}</div>
</template>

<script lang="ts" setup>
const route = useRoute();
const id = ref(route.params.id);
definePageMeta({ middleware: "auth" });
</script>

<style></style>
