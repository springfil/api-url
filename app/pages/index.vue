<template>
    <div class="wrapper">
        <div class="create" v-if="!!authStore.token">
            <NuxtLink to="/post/create">
                <Icon name="icons:add" size="34px" />
                <span>Добавить новое обновление для голосования</span>
            </NuxtLink>
        </div>
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
        <div class="posts-list" v-if="postsData">
            <PostCard
                v-for="(post, index) in postsData.posts"
                :key="`post-card-${post.id}`"
                v-model:post="postsData.posts[index]"
                @delete="onPostDeleted"
            />
        </div>
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
import { useApi } from "~/composables/useApi";
import type { GetPostsResponse } from "~/interfaces/post.interface";

useSeoMeta({
    title: "Главная",
    description: "Главная страница VoteApp приложения с постами",
});

const { API_URL } = useApi();

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

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

const { data: postsData, refresh } = await useFetch<GetPostsResponse>(
    `${API_URL}/posts`,
    {
        query,
        deep: true,
    },
);

const onPostDeleted = () => refresh();
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 136px;
    overflow: hidden;
}

.create a {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 28px;
    text-decoration: none;
    color: var(--color-dark-gray);
}

.create a:hover {
    color: var(--color-dark-gray-2);
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

.posts-list {
    max-height: 700px;
    overflow-y: auto;
}

.pagination__menu {
    margin-top: auto;
}
</style>
