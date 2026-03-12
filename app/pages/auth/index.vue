<template>
    <form class="login-form">
        <div class="login-form__fields">
            <div class="title">Вход на платформу</div>
            <div class="login-form__fields-field">
                <InputField
                    v-model="email"
                    variant="black"
                    placeholder="e-mail"
                />
            </div>
            <div class="login-form__fields-field">
                <InputField
                    v-model="password"
                    placeholder="password"
                    variant="black"
                    type="password"
                />
            </div>
        </div>
        <div class="login-form__actions">
            <ActionButton @click.stop.prevent="onLoginClick">
                Войти в аккаунт
            </ActionButton>
        </div>
    </form>
</template>

<script setup lang="ts">
import type { LoginResponse } from "~/interfaces/auth.interface";

useSeoMeta({
    title: "Вход",
    description: "Страница входа в аккаунт VoteApp приложения",
});

const email = ref<string | undefined>();
const password = ref<string | undefined>();

const { API_URL } = useApi();
const authStore = useAuthStore();

const onLoginClick = async () => {
    try {
        const data = await $fetch<LoginResponse>(`${API_URL}/auth/login`, {
            method: "POST",
            body: {
                email: email.value,
                password: password.value,
            },
        });
        authStore.setToken(data.token);
        authStore.setUserData(data.user);
        navigateTo("/");
    } catch (error) {
        alert("Неверные данные");
    }
};
</script>

<style scoped>
.login-form {
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
    margin-top: calc(50vh - 100px);
    display: flex;
    flex-direction: column;
    gap: 27px;
}

.login-form .title {
    font-weight: 500;
    font-size: 16px;
    align-self: center;
}

.login-form__fields {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.login-form__actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.login-form__actions button {
    border-radius: 4px;
}

.login-form__actions a:hover {
    color: var(--color-black-hover);
}
</style>
