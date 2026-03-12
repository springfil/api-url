# VoteApp

SPA-приложение для просмотра и голосования за посты. Авторизованные пользователи могут создавать, редактировать и удалять свои посты.

## Стек

- **Nuxt 4** + Vue 3 + TypeScript
- **Pinia** + pinia-plugin-persistedstate (persist в localStorage)
- **Бэкенд:** Go API (бинарник, запускается локально)
- **Авторизация:** JWT токен → заголовок `Authorization: Bearer`

## Структура проекта

```
app/
  pages/        — роуты (/, /auth, /post/create, /post/[id]/edit)
  components/   — PostCard и др.
  composables/  — useApi, usePostsApi
  stores/       — auth.store.ts (токен + пользователь)
  middleware/   — auth.ts (защита роутов)
  layouts/      — default.vue
assets/         — стили и иконки
```

## Требования

- Node.js 18+
- Go API бинарник (запущен локально)

## Установка

```bash
npm install
```

## Настройка

Создай `.env` файл в корне:

```env
NUXT_PUBLIC_APIURL=http://localhost:8080
```

## Запуск

Сначала запусти Go API бинарник, затем:

```bash
npm run dev
```

Приложение доступно на `http://localhost:3000`

## Сборка

```bash
npm run build
npm run preview
```
