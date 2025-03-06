<template>
  <div class="pa-2">
    <!-- header section -->
    <div class="d-flex justify-space-between">
      <p class="text-h5">
        My Blogs
      </p>

      <v-btn
        text="Create Blog"
        prepend-icon="mdi-plus"
        :to="{ path: '/blogs/create' }"
      />
    </div>

    <!-- search and list type -->
    <div class="d-flex flex-column flex-sm-row justify-space-between mt-3">
      <div class="w-sm-50">
        <v-text-field
          v-model="search"
          variant="outlined"
          prepend-inner-icon="mdi-magnify"
          density="comfortable"
          label="Search Blogs by Title"
          hide-details
          clearable
        />
      </div>
      <div class="d-none d-sm-flex ga-2 align-center">
        <v-icon
          size="30"
          :icon="showAsList ? 'mdi-view-list' : 'mdi-view-list-outline'"
          @click="showAsList = true"
        />

        <v-icon
          :icon="showAsList ? 'mdi-view-grid-outline' : 'mdi-view-grid'"
          @click="showAsList = false"
        />
      </div>
    </div>

    <!-- blogs list/grid -->
    <v-container
      v-if="blogs?.length"
      fluid
    >
      <v-row>
        <v-slide-x-transition
          group
          hide-on-leave
        >
          <v-col
            v-for="blog in blogs"
            :key="blog.id"
            :cols="showAsList ? 12 : 4"
          >
            <component
              :is="showAsList ? BlogListCard : BlogCard"
              v-bind="{ blog }"
            />
          </v-col>
        </v-slide-x-transition>
      </v-row>
    </v-container>

    <!-- no blogs section -->
    <v-empty-state
      v-else
      class="mt-3"
      title="No Blogs found"
      text="You have not created any blogs. Blogs you create will appear here"
      action-text="Add a New Blog"
      @click:action="$router.push({ path: '/blogs/create' })"
    >
      <template #media>
        <v-img
          :src="
            $vuetify.theme.current.dark
              ? '/no-data-dark.svg'
              : '/no-data-light.svg'
          "
          height="200"
          class="mb-5"
        />
      </template>
    </v-empty-state>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import data from "../../blog.json";
import type Blog from "@/types/Blog";
import BlogListCard from "@/components/blog/BlogListCard.vue";
import BlogCard from "@/components/blog/BlogCard.vue";

const blogs = computed<undefined | Blog[]>(() =>
  data.blogs.filter((blog) => blog.title.includes(search.value))
);

// search
const search = ref("");

// toggle list and grid view
const showAsList = ref(true);
</script>
