<script setup lang="ts">
import type Blog from "@/types/Blog";

defineProps<{
  blog: Blog
}>();
</script>

<template>
  <v-card>
    <template #text>
      <!-- blog image -->
      <div>
        <v-img :src="blog.image" />
      </div>

      <!-- title and text -->
      <div class="mt-2">
        <p class="text-h6">
          {{ blog.title }}
        </p>
        <p class="text-subtitle-1">
          {{ blog.text.slice(0,150) }}
        </p>
      </div>
    </template>
  </v-card>
</template>
