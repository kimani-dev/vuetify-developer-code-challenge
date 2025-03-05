<template>
  <!-- pinned and featured blogs -->
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <PinnedBlog :blog="pinnedBlog" />
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <div
        v-for="blog, index in featuredBlogs"
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
      v-for="blog in normalBlogs"
      :key="blog.title"
      cols="12"
      md="4"
    >
      <BlogCard :blog="blog" />
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import data from "../blog.json"
import type Blog from "@/types/Blog";

const blogs = ref<Blog[]>(data.blogs)

const pinnedBlog = computed(()=> blogs.value.find((blog) => blog.pinned))
const featuredBlogs =  computed(()=> blogs.value.filter((blog) => blog.featured))
const normalBlogs = computed(() => blogs.value.filter((blog) => !blog.pinned && !blog.featured ))
</script>
