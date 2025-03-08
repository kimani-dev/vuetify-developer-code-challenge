<template>
  <div class="d-flex justify-space-between">
    <h1 class="text-h4">
      Blog Editor: {{ blog?.title }}
    </h1>

    <v-btn
      text="Edit Blog Details"
      prepend-icon="mdi-pencil-outline"
    />
  </div>

  <div
    v-if="blog"
    class="mt-3"
  >
    <!-- image upload -->
    <v-file-input
      v-model="image"
      label="Upload cover image"
      prepend-inner-icon="mdi-image"
      accept="image/*"
    />
    <v-textarea
      v-model.trim="text"
      placeholder="Blog content here..."
      auto-grow
    />
    <v-btn
      text="Save"
      @click="saveBlog"
    />
  </div>
</template>

<script setup lang="ts">
import { useBlogStore } from "@/store/blog";
import type Blog from "@/types/Blog";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const blogStore = useBlogStore();
const route = useRoute();
const router = useRouter();
const blog = computed(() =>
  blogStore.blogs.find((blog) => blog.id === route.params.id)
);

const text = ref(blog.value?.text);
const image = ref<null | File>(null);

async function saveBlog() {
  if (!blog.value) return;

  const payload: Partial<Blog> = {
    text: text.value,
  };
  // add image if it exists
  if (image.value) {
    try {
      payload.image = await imageToBase64(image.value);
    } catch (error) {
      console.error("Error converting image to base64:", error);
    }
  }

  blogStore.updateBlog(blog.value?.id, payload);
  router.push({ path: "/blogs/myblogs" });
}

function imageToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}
</script>
