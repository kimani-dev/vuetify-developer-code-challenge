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
          height="200"
          width="100%"
          :src="blog.image"
          :is-hovering="isHovering"
        />
      </v-col>

      <v-col>
        <div class="d-flex flex-column ga-2">
          <p class="text-h6">
            {{ blog.title }}
          </p>

          <p class="text-subtitle-1 font-weight-light">
            {{ blog.text.substring(0, 150) }}
          </p>

          <BlogInfo
            :blog
            :show-actions
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
  showActions?: boolean;
}>();
</script>
