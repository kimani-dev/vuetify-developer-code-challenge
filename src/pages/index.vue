<template>
  <!-- pinned and featured blogs -->
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <PinnedBlog :blog="{...pinnedBlog, image: `https://picsum.photos/536/354`}" />
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <FeaturedBlog
        v-for="blog in featuredBlogs"
        :key="blog.title"
        :blog="{...blog, image: `https://picsum.photos/536/354`}"
      />
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
      <BlogCard :blog="{...blog, image: `https://picsum.photos/536/354`}" />
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
