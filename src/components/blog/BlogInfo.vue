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
          calculateReadTime(blog.text) > 2
            ? calculateReadTime(blog.text)
            : '< 2'
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
        <template #activator="{ props: attrs }">
          <v-icon
            icon="mdi-dots-vertical"
            v-bind="attrs"
            @click="(e) => e.preventDefault()"
          />
        </template>

        <v-list min-width="200">
          <v-list-item
            title="Edit"
            prepend-icon="mdi-pencil-outline"
            :to="{ path: `/blogs/editor_${blog.id}` }"
          />
          <v-list-item
            title="View"
            prepend-icon="mdi-eye-outline"
            :to="{ path: `/blogs/${blog.id}` }"
          />
          <v-list-item
            v-if="blog.draft"
            title="Publish Blog"
            prepend-icon="mdi-publish"
            @click="publishBlog"
          />
          <v-list-item
            title="Delete Blog"
            color="error"
            prepend-icon="mdi-trash-can-outline"
            @click="showDeleteBlogDialog = true"
          />
        </v-list>
      </v-menu>
    </div>
  </div>

  <!-- confirm delete dialog -->
  <BaseDialog
    title="Confirm"
    subtitle="Delete Blog"
    :visible="showDeleteBlogDialog"
    action-button-text="Delete"
    @action-click="deleteBlog"
    @close="showDeleteBlogDialog = false"
  >
    <p>Are you sure you want to delete this blog?</p>
  </BaseDialog>
</template>

<script setup lang="ts">
import type Blog from "@/types/Blog";
import moment from "moment";
import { useBlogStore } from "@/store/blog";
import { useSnackBarStore } from "@/store/snackbar";
import { ref } from "vue";

const blogStore = useBlogStore();
const snackBarStore = useSnackBarStore();

const props = defineProps<{
  blog: Blog;
  textColor?: string;
  showActions?: boolean;
}>();

const showDeleteBlogDialog = ref(false);

function calculateReadTime(text: string, wpm = 200) {
  const words = text.trim().split(/\s+/).length;
  const minutes = words / wpm;
  return Math.ceil(minutes);
}

function publishBlog() {
  blogStore.publishBlog(props.blog.id);
  snackBarStore.showSnackBar({
    text: "Blog published succesfully",
    type: "success",
  });
}

function deleteBlog() {
  blogStore.deleteBlog(props.blog.id);
  snackBarStore.showSnackBar({
    text: "Blog deleted succesfully",
    type: "success",
  });

  showDeleteBlogDialog.value = false;
}
</script>
