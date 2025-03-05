<template>
  <BaseBlogCard v-slot="{ isHovering }">
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
        class="ml-2 mb-2 d-flex"
      >
        <!-- type -->
        <v-chip
          variant="outlined"
          text="Swimming"
          color="white"
          size="small"
          class="my-auto"
        />

        <v-divider
          vertical
          color="white"
          inset
          opacity="1"
          class="ml-2"
        />

        <!-- read time -->
        <v-chip
          prepend-icon="mdi-clock-outline"
          text="10 Mins"
          variant="text"
          color="white"
        />
      </div>
    </BlogImage>

    <div class="mt-1 pa-2">
      <p class="text-h6">
        {{ blog.title }}
      </p>
    </div>
  </BaseBlogCard>
</template>

<script setup lang="ts">
import type Blog from "@/types/Blog";

defineProps<{ blog: Blog }>();
</script>
