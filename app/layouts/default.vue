<template>
    <div class="layout">
        <aside class="sidebar">
            <nav>
                <NuxtLink to="/">
                    <Icon name="icons:home" size="24px" />
                </NuxtLink>
                <NuxtLink @click.prevent="onLogOut">
                    <Icon name="icons:un-auth" size="24px" />
                </NuxtLink>
            </nav>
        </aside>

        <main class="content">
            <slot />
        </main>
    </div>
</template>

<script lang="ts" setup>
const authStore = useAuthStore();
const onLogOut = () => {
    authStore.clearToken();
    navigateTo("/auth");
};
</script>

<style scoped>
.layout {
    display: flex;
    height: 100vh;
    width: 100%;
}

.sidebar {
    min-height: 100vh;
    width: 80px;
}

.sidebar nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    height: 100%;
    border-right: 1px solid var(--color-gray);
}

.content {
    flex: 1;
    padding: 20px;
    min-width: 0;
    overflow-wrap: break-word;
}
</style>
