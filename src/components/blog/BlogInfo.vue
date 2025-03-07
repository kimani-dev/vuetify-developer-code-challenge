<template>
  <div
    class="d-flex ga-2"
    :class="`text-${textColor}`"
  >
    <v-chip
      prepend-icon="mdi-newspaper"
      :text="blog.type"
      variant="text"
    />

    <v-divider
      inset
      vertical
    />

    <v-chip
      prepend-icon="mdi-clock-outline"
      :text="`${
        calculateReadTime(blog.text) > 2 ? calculateReadTime(blog.text) : '< 2'
      } mins`"
      variant="text"
    />

    <v-divider
      inset
      vertical
    />

    <v-chip
      prepend-icon="mdi-calendar-outline"
      :text="moment(blog.date).fromNow()"
      variant="text"
    />
  </div>
</template>

<script setup lang="ts">
import type Blog from "@/types/Blog";
import moment from "moment";

defineProps<{
  blog: Blog;
  textColor?: string;
}>();

function calculateReadTime(text: string, wpm = 200) {
  const words = text.trim().split(/\s+/).length;
  const minutes = words / wpm;
  return Math.ceil(minutes);
}
</script>
