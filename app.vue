<script setup lang="ts"></script>

<template>
    <NuxtLayout>
        <NuxtPage
            :transition="{
                name: 'page',
                mode: 'out-in',
            }"
        />
    </NuxtLayout>
</template>

<style scoped>
.page-leave-active,
.page-enter-active {
    transition: all 0.5s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
}

.main {
    margin: 0 auto;
    max-width: 1248px;
    padding: 40px 0;
}
</style>
