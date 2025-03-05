<template>
  <BaseBlogCard
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
          height="180"
          width="100%"
        />
      </v-col>

      <v-col
        cols="12"
        md="8"
      >
        <div class="d-flex flex-column ga-2">
          <p class="text-h6">
            {{ blog.title }}
          </p>

          <p class="text-subtitle-1 font-weight-light">
            {{ blog.text.substring(0, 150) }}
          </p>

          <v-chip
            prepend-icon="mdi-clock-outline"
            text="10 Mins"
            variant="text"
          />
        </div>
      </v-col>
    </v-row>
  </BaseBlogCard>
</template>

<script setup lang="ts">
import type Blog from "@/types/Blog";

defineProps<{
  blog: Blog;
}>();
</script>
