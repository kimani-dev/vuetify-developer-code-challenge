<template>
  <v-card
    class="mt-2"
    flat
  >
    <template #text>
      <v-row>
        <v-col cols="4">
          <v-img
            :src="blog.image"
            height="100"
            width="100"
          />
        </v-col>

        <v-col cols="8">
          <p class="text-h6">
            {{ blog.title }}
          </p>

          <p class="text-subtitle-1 mt-2">
            {{ blog.text.substring(0, 50) }}
          </p>

          <v-chip
            prepend-icon="mdi-clock-outline"
            text="10 Mins"
            variant="text"
          />
        </v-col>
      </v-row>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import type Blog from "@/types/Blog";

defineProps<{
  blog: Blog;
}>();
</script>
