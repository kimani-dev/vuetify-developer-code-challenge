<template>
  <h1>Blog Editor: {{ blog?.id }}</h1>

  <div v-if="blog">
    <v-textarea v-model.trim="text" />
    <v-btn
      text="Save"
      @click="blogStore.updateBlog(blog?.id, { text })"
    />
  </div>
</template>

<script setup lang="ts">
import { useBlogStore } from "@/store/blog";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const blogStore = useBlogStore();
const route = useRoute();
const blog = computed(() =>
  blogStore.blogs.find((blog) => blog.id === route.params.id)
);

const text = ref("");
</script>
