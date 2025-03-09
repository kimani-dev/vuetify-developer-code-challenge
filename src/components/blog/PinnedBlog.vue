<template>
  <BaseBlogCard
    :id="blog.id"
    v-slot="{ isHovering }"
  >
    <BlogImage
      :src="blog.image"
      :is-hovering
      height="500"
      width="100%"
      content-class="d-flex align-center justify-center"
      :gradient="
        isHovering
          ? 'to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)'
          : ' to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4)'
      "
    >
      <div
        v-if="isHovering"
      >
        <BlogInfo
          :blog
          text-color="white"
        />
      </div>
    </BlogImage>

    <div class="mt-1 pa-2">
      <p class="text-h6">
        {{ blog.title }}
      </p>
      <p class="text-subtitle-1 font-weight-light">
        {{ useWordSafeSubstring(blog.text, 80) }}
      </p>
    </div>
  </BaseBlogCard>
</template>

<script setup lang="ts">
import { useWordSafeSubstring } from "@/composables/useTextTruncate";
import type Blog from "@/types/Blog";

defineProps<{ blog: Blog }>();
</script>
