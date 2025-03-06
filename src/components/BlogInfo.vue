<template>
  <div
    class="d-flex ga-2"
    :class="`text-${textColor}`"
  >
    <v-chip
      prepend-icon="mdi-newspaper"
      text="Lifestyle"
      variant="text"
    />

    <v-divider
      inset
      vertical
    />

    <v-chip
      prepend-icon="mdi-clock-outline"
      text="10 Mins"
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
import moment from "moment";
defineProps<{
  blog: Blog;
  textColor?: string;
}>();
</script>
