<template>
    <div class="card">
        <div class="card__header">
            <div>
                <Icon name="icons:basket" size="24px" class="card__icon" />
            </div>
            <span class="card__company-name">PurpleSchool</span>
            <span class="card__date">4 дня назад</span>
        </div>

        <!-- Основное содержимое -->
        <div class="card__body">
            <h3 class="card__title">Добавить функцию голосования</h3>
            <p class="card__description">
                Попробовать добавить в приложение функцию голосования, которая
                позволит определить, какая фича более полезна, а какая нет.
                После добавления поста появляется...
            </p>

            <div class="card__body-footer footer">
                <div class="footer__votes">
                    <button class="footer__vote-button footer__vote-button--up">
                        <icon name="icons:like" class="footer__vote-icon" size="18px" />
                        <span class="footer__vote-count">10</span>
                    </button>
                    <button
                        class="footer__vote-button footer__vote-button--down"
                    >
                        <icon name="icons:dislike" class="footer__vote-icon" size="18px" />
                        <span class="footer__vote-count">1</span>
                    </button>
                </div>

                <div class="footer__actions">
                    <icon name="icons:basket" class="footer__action-icon" size="16px"/>
                    <nuxt-link
                        to="/edit"
                        class="footer__action footer__action--edit"
                    >
                        <icon
                            name="icons:editing"
                            class="footer__action-icon"
                            size="16px"
                        />
                        <span>Изменить</span>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// const route = useRoute();
// const id = ref(route.params.id);
</script>

<style scoped>
.card {
    max-width: 700px;
    margin: 0 auto;
    background: #fff;
}

.card__header {
    display: flex;
    align-items: center;
}

.card__company-name {
    font-weight: 300;
    font-size: 14px;
    margin-left: 8px;
    color: var(--color-dark-gray);
}

.card__date {
    font-size: 14px;
    margin-left: 16px;
    color: var(--color-gray);
}

.card__body {
    margin-top: 10px;
    max-width: 540px;
    padding-bottom: 36px;
    border-bottom: 1px solid var(--color-gray);
}

.card__title {
    font-size: 22px;
    font-weight: 400;
    color: var(--color-black);
    margin-bottom: 8px;
}

.card__description {
    font-size: 16px;
    color: var(--color-dark-gray);
    margin-bottom: 10px;
    line-height: 1.5;
}

.footer {
    display: flex;
    align-items: center;
    gap: 320px;
}

.footer__votes {
    display: flex;
    gap: 12px;
}

.footer__vote-button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: none;
    border: none;
    padding: 0;
    font-size: 14px;
    font-weight: 400;
    color: #1f2937;
    cursor: pointer;
    transition: color 0.2s;
}

.footer__vote-button--up:hover {
    color: #10b981;
}

.footer__vote-button--down:hover {
    color: #ef4444;
}

.footer__actions {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
}

.footer__action {
    display: flex;
    text-decoration: none;
    color: var(--color-dark-gray);
    gap: 6px;
    font-size: 14px;
}

.footer__action--edit {
    border-color: #ddd;
}

.footer__action--delete {
    background: transparent;
    border-color: #ddd;
    color: #dc2626;
}

.footer__action--delete:hover {
    background: #fee2e2;
    border-color: #dc2626;
}
</style>
