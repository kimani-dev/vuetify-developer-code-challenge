<template>
  <v-scale-transition>
    <div v-if="blog">
      <!-- navigate back -->
      <v-btn
        prepend-icon="mdi-chevron-left"
        text="Back"
        variant="text"
        @click="$router.back()"
      />

      <!-- title section -->
      <v-row
        justify="center"
        class="mt-5"
      >
        <v-col
          cols="12"
          md="7"
        >
          <!-- blog type -->
          <div class="d-flex justify-center">
            <v-chip :text="blog.type" />
          </div>
          <!-- blog title -->
          <h1 class="text-center mt-2 text-h4 mt-3">
            {{ blog.title }}
          </h1>
          <!-- blog date -->
          <div class="d-flex ga-2 justify-center mt-3">
            <p class="text-subtitle-2 font-weight-light">
              {{ moment(blog.date).format("DD MMMM YYYY") }}
            </p>
            <v-icon icon="mdi-circle-small" />
            <p class="text-subtitle-2 font-weight-light">
              {{ moment(blog.date).format("HH : MM A") }}
            </p>
          </div>
        </v-col>
      </v-row>

      <!-- image section -->
      <v-row class="mt-3">
        <v-img
          :src="
            !!blog.image
              ? blog.image
              : $vuetify.theme.current.dark
                ? '/blog-image-dark.svg'
                : '/blog-image-dark.svg'
          "
          height="500"
          width="100%"
          :cover="!!blog.image"
          @load="handleImageError"
        />
      </v-row>

      <!-- blog text -->
      <v-row class="mt-5 pa-2">
        <v-col>
          <p
            class="text-body-1 font-weight-light"
            v-html="blog.text.replace(/\n/g, '<br/>')"
          />

          <div class="d-flex justify-end mt-3">
            <v-list-item
              prepend-avatar="https://i.pravatar.cc/100?img=2"
              :title="blog.author.name"
              :subtitle="blog.author.email"
            />
          </div>
        </v-col>
      </v-row>
    </div>

    <!-- blog not found -->
    <v-empty-state
      v-else
      headline="Whoops"
      title="Blog not found"
      text="The blog you were looking for does not exist"
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
  </v-scale-transition>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useBlogStore } from "@/store/blog";
import { useSnackBarStore } from "@/store/snackbar";
import moment from "moment";

const { params } = useRoute();
const id = params.id as string;

const blogStore = useBlogStore();
const blog = blogStore.blogs.find((blog) => blog.id === id);

const { showSnackBar } = useSnackBarStore();
function handleImageError(e: string | undefined) {
  showSnackBar({
    text: `Error loading our images: ${e}. Please try hard reloading with CTRL + SHIFT + R`,
    type: "error",
    actionText: "Close",
  });
}
</script>
