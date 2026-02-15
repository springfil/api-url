<template>
    <div>Страница поста {{ id }}</div>
</template>

<script lang="ts" setup>
const route = useRoute();
const id = ref(route.params.id);
</script>

<style></style>
