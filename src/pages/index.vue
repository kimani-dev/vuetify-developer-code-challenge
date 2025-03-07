<template>
  <!-- pinned and featured blogs -->
  <v-row>
    <v-col
      v-if="pinnedBlog"
      cols="12"
      :md="featuredBlogs.length ? 6 : 12"
    >
      <PinnedBlog :blog="pinnedBlog" />
    </v-col>

    <v-col
      v-if="featuredBlogs.length"
      cols="12"
      :md="!!pinnedBlog ? 6 : 12"
    >
      <div
        v-for="(blog, index) in featuredBlogs"
        :key="blog.title"
      >
        <div
          v-if="index > 0"
          class="mt-2"
        />
        <FeaturedBlog :blog="blog" />
      </div>
    </v-col>
  </v-row>

  <!-- other blogs -->
  <v-row>
    <v-col
      v-for="blog in otherBlogs"
      :key="blog.title"
      cols="12"
      md="4"
    >
      <BlogCard :blog="blog" />
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { useBlogStore } from "@/store/blog";
import { storeToRefs } from "pinia";

const blogStore = useBlogStore();
const { otherBlogs, pinnedBlog, featuredBlogs } = storeToRefs(blogStore);
</script>
