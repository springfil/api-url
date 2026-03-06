<template>
    <textarea v-model="value" class="textarea-field" />
</template>

<script setup lang="ts">
defineProps();
const value = defineModel<string>();
</script>

<style scoped>
.textarea-field {
    width: 100%;
    padding: 8px 12px;
    background: none;
    border: 1px solid var(--color-gray);
    border-radius: 20px;
    color: var(--color-black);
}
</style>
