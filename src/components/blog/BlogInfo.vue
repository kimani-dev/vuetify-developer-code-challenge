<template>
  <div
    class="d-flex justify-space-between"
    :class="`text-${textColor}`"
  >
    <div class="d-flex ga-2">
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


    <div
      v-if="showActions"
      class="justify-end"
    >
      <v-menu>
        <template #activator="{props}">
          <v-icon
            icon="mdi-dots-vertical"
            v-bind="props"
            @click="(e) => e.preventDefault()"
          />
        </template>

        <v-list min-width="200">
          <v-list-item
            title="Edit"
            prepend-icon="mdi-pencil-outline"
            :to="{path: `/blogs/editor_${blog.id}`}"
          />
          <v-list-item
            title="View"
            prepend-icon="mdi-eye-outline"
            :to="{path: `/blogs/${blog.id}`}"
          />
          <v-list-item
            v-if="blog.draft"
            title="Publish Blog"
            prepend-icon="mdi-publish"
            @click="blogStore.publishBlog(blog.id)"
          />
          <v-list-item
            title="Delete Blog"
            color="error"
            prepend-icon="mdi-trash-can-outline"
            @click="blogStore.deleteBlog(blog.id)"
          />
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import type Blog from "@/types/Blog";
import moment from "moment";
import { useBlogStore } from "@/store/blog";

const blogStore = useBlogStore()

defineProps<{
  blog: Blog;
  textColor?: string;
  showActions?: boolean
}>();

function calculateReadTime(text: string, wpm = 200) {
  const words = text.trim().split(/\s+/).length;
  const minutes = words / wpm;
  return Math.ceil(minutes);
}
</script>
