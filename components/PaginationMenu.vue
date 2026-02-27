<template>
    <nav class="pagination-container">
        <template v-for="(page, index) in pagesToShow" :key="index">
            <NuxtLink
                :class="{ 'active-page': page === currentPage }"
                @click.stop.prevent="changePage(page)"
            >
                {{ page }}
            </NuxtLink>
            <div v-if="index !== pagesToShow.length - 1" class="divider" />
        </template>
    </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
    totalCount: number;
    pageSize: number;
}>();

const currentPage = defineModel<number>({ required: true });

const totalPages = computed(() => {
    if (props.totalCount === 0 || props.pageSize === 0) return 0;
    return Math.ceil(props.totalCount / props.pageSize);
});

const pagesToShow = computed(() => {
    const pages: number[] = [];
    const total = totalPages.value;

    for (let i = 1; i <= Math.min(total, 5); i++) {
        pages.push(i);
    }

    return pages;
});

function changePage(page: number) {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
}
</script>

<style scoped>
.pagination-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    margin-top: 32px;
    padding: 20px 0;
}

.pagination-container a {
    font-size: 16px;
    color: var(--color-dark-gray);
    text-decoration: none;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 4px;
    transition: all 0.2s ease;
}

.pagination-container a:hover {
    background-color: var(--color-gray-light);
    color: var(--color-black-soft);
}

.pagination-container a.active-page {
    color: var(--color-black-soft);
    font-weight: 600;
    background-color: var(--color-gray-light);
}

.divider {
    width: 1px;
    height: 20px;
    background-color: var(--color-gray);
}
</style>
