<template>
  <v-card>
    <template #text>
      <v-img
        src="https://plus.unsplash.com/premium_photo-1738597453072-165b9d750e1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
        height="400"
        cover
      />

      <div class="mt-1">
        <p class="text-h6">
          {{ blog.title }}
        </p>
      </div>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import type Blog from "@/types/Blog";

defineProps<{ blog: Blog }>();
</script>
