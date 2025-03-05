<template>
  <v-scale-transition>
    <div v-if="blog">
      <!-- navigate back -->
      <v-btn
        prepend-icon="mdi-chevron-left"
        text="Back"
        variant="text"
        :to="{path: '/'}"
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
            <v-chip text="Swimming" />
          </div>
          <!-- blog title -->
          <h1 class="text-center mt-2 text-h4 mt-3">
            {{ blog.title }}
          </h1>
          <!-- blog date -->
          <div class="d-flex ga-2 justify-center mt-3">
            <p class="text-subtitle-2 font-weight-light">
              {{ moment(blog.date).format('DD MMMM YYYY') }}
            </p>
            <v-icon icon="mdi-circle-small" />
            <p class="text-subtitle-2 font-weight-light">
              {{ moment(blog.date).format('HH : MM A') }}
            </p>
          </div>
        </v-col>
      </v-row>

      <!-- image section -->
      <v-row class="mt-3">
        <v-img
          :src="blog.image"
          height="500"
          width="100%"
          cover
        />
      </v-row>

      <!-- blog text -->
      <v-row class="mt-5 pa-3">
        <p class="text-body-1 font-weight-light">
          {{ blog.text }}
        </p>
      </v-row>
    </div>
  </v-scale-transition>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import data from "../../blog.json";

import type Blog from "@/types/Blog";
import moment from "moment";

const { params } = useRoute();
const id = params.id as string
const blog = computed<undefined | Blog>(() => data.blogs.find((blog)=> blog.id === parseInt(id)));
</script>
