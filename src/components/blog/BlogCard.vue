<template>
  <BaseBlogCard
    :id="blog.id"
    v-slot="{ isHovering }"
  >
    <!-- blog image -->
    <BlogImage
      :src="blog.image"
      width="100%"
      height="200"
      :is-hovering
    />

    <!-- title and text -->
    <div class="d-flex flex-column ga-2 pa-2">
      <p
        class="text-h6"
        :class="isHovering ? 'text-primary' : ''"
      >
        {{ blog.title.substring(0,60) }}
      </p>

      <p class="text-subtitle-1 font-weight-light">
        {{ blog.text.substring(0, 150) }}
      </p>

      <BlogInfo
        :blog
        :show-actions
      />
    </div>
  </BaseBlogCard>
</template>

<script setup lang="ts">
import type Blog from "@/types/Blog";

defineProps<{
  blog: Blog;
  showActions?: boolean;
}>();
</script>
