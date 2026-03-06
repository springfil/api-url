<template>
    <div class="post-edit">
        <div class="post-edit__left">
            <Icon name="icons:add" size="34px" class="post-edit__icon" />
            <div class="post-edit__border"></div>
        </div>
        <div class="post-edit__right">
            <InputField
                v-model="title"
                variant="gray"
                placeholder="Тема"
                class="post-edit__title"
            />
            <TextAreaField
                v-model="content"
                class="post-edit__content"
                placeholder="Текст..."
            />
            <ActionButton class="post-edit__save-button" @click="onSaveClick">
                Сохранить
            </ActionButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Post } from "~/interfaces/post.interface";

const props = defineProps<{
    post?: Post;
}>();

const title = ref<Post["title"]>(props.post?.title ?? "");
const content = ref<Post["content"]>(props.post?.content ?? "");

const postsApi = usePostsApi();

const onSaveClick = async () => {
    const response = await postsApi.save(
        {
            title: title.value,
            content: content.value,
        },
        props.post?.id,
    );

    if (response) {
        navigateTo(`/post/edit/${response.id}`);
    }
};
</script>

<style>
.post-edit {
    display: flex;
    gap: 8px;
    position: relative;
}

.post-edit__border {
    position: absolute;
    top: 36px;
    bottom: 0;
    left: 16px;
    width: 1px;
    background-color: var(--color-gray);
}

.post-edit__right {
    display: flex;
    flex-direction: column;
    gap: 28px;
}

.post-edit__title {
    width: 320px;
}

.post-edit__content {
    min-width: 480px;
    max-width: 480px;
    min-height: 150px;
    max-height: 320px;
}

.post-edit__save-button {
    align-self: flex-end;
}
</style>
