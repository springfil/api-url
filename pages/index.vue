<template>
    <div class="wrapper">
        <div class="filter">
            <div class="filter__item">
                <NuxtLink
                    :class="{ active: sort === 'date' }"
                    @click.stop.prevent="sort = 'date'"
                >
                    По дате
                </NuxtLink>
            </div>
            <div class="filter__item">
                <NuxtLink
                    :class="{ active: sort === 'rating' }"
                    @click.stop.prevent="sort = 'rating'"
                >
                    По рейтингу
                </NuxtLink>
            </div>
        </div>
        <PostCard
            v-for="post in postsData?.posts"
            :key="post.id"
            v-bind="post"
        />
        <div class="pagination__menu">
            <PaginationMenu
                v-model="page"
                :total-count="postsData?.total ?? 0"
                :page-size="pageSize"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { GetPostsResponse } from "~/interfaces/product.interface";

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;

const route = useRoute();
const router = useRouter();

const page = ref<number>(parseInt(route.query.page?.toString() ?? "1") || 1);
const pageSize = ref<number>(
    parseInt(route.query.page_size?.toString() ?? "3") || 3,
);

const sort = ref<"date" | "rating">(
    route.query.sort === "rating" ? "rating" : "date",
);

watchEffect(() => {
    router.replace({
        query: {
            page: page.value,
            sort: sort.value,
            page_size: pageSize.value,
        },
    });
});

const query = computed(() => ({
    page: route.query.page || 1,
    page_size: route.query.page_size || 3,
    sort: route.query.sort || "date",
}));

const { data: postsData } = await useFetch<GetPostsResponse>(
    `${API_URL}/posts`,
    {
        query,
    },
);
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 136px;
}

.filter {
    display: flex;
    gap: 40px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-gray);
}

.filter__item a {
    font-weight: 300;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    color: var(--color-dark-gray);
    text-decoration: none;
}

.filter__item a:not(.active) {
    cursor: pointer;
}

.filter__item a:not(.active):hover {
    color: var(--color-dark-gray-2);
}

.filter__item a.active {
    color: var(--color-black-soft);
}

.pagination__menu {
    margin-top: auto;
}
</style>
