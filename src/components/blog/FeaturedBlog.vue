<template>
  <BaseBlogCard
    :id="blog.id"
    v-slot="{ isHovering }"
    rounded="s-xl"
  >
    <v-row>
      <v-col
        cols="12"
        md="4"
      >
        <BlogImage
          :src="blog.image"
          :is-hovering
          height="200"
          width="100%"
        />
      </v-col>

      <v-col
        cols="12"
        md="8"
      >
        <div class="d-flex flex-column ga-1">
          <p class="text-h6">
            {{ blog.title }}
          </p>

          <p class="text-subtitle-1 font-weight-light">
            {{ useWordSafeSubstring(blog.text, 90) }}
          </p>

          <BlogInfo :blog />
        </div>
      </v-col>
    </v-row>
  </BaseBlogCard>
</template>

<script setup lang="ts">
import { useWordSafeSubstring } from "@/composables/useTextTruncate";
import type Blog from "@/types/Blog";

defineProps<{
  blog: Blog;
}>();
</script>
