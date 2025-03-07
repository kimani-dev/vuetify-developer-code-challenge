<template>
  <BaseDialog
    title="Blog Details"
    subtitle="Add details to your blog"
    :visible="showDialog"
    action-button-text="Proceed"
    @close="$emit('close')"
    @action-click="proceedToEditor"
  >
    <v-form
      ref="form"
      v-model="blogForm.valid"
      @submit.prevent="proceedToEditor"
    >
      <!-- basic information -->
      <div class="d-flex w-100 w-sm-50 mx-auto align-center mb-3">
        <v-divider inset />
        <p
          class="w-100 text-center font-weight-light text-caption text-uppercase"
        >
          Basic Information
        </p>
        <v-divider />
      </div>

      <v-text-field
        v-model="blogForm.title"
        label="Blog Title"
        prepend-inner-icon="mdi-text"
        counter
        :counter-value="50"
        :rules="[rules.required]"
      />
      <v-combobox
        v-model="blogForm.type"
        label="Blog Type"
        hint="Type and press Enter for custom types"
        prepend-inner-icon="mdi-tag-text-outline"
        :rules="[rules.required]"
        :items="blogTypes"
        chips
        clearable
      />

      <!-- blog settings -->
      <div class="d-flex w-100 w-sm-50 mx-auto align-center mb-3">
        <v-divider inset />
        <p
          class="w-100 text-center font-weight-light text-caption text-uppercase"
        >
          Blog Settings
        </p>
        <v-divider />
      </div>

      <v-checkbox
        v-model="blogForm.featured"
        color="primary"
        hide-details="auto"
      >
        <template #label>
          <p>
            Make this blog featured?
            <v-icon
              v-tooltip="'Only the three latest featured blogs will be shown'"
              icon="mdi-information-variant-circle"
            />
          </p>
        </template>
      </v-checkbox>
      <v-checkbox
        v-model="blogForm.pinned"
        color="primary"
        hide-details="auto"
      >
        <template #label>
          <p>
            Pin this blog?
            <v-icon
              v-tooltip="'Only the latest pinned blog will be shown'"
              icon="mdi-information-variant-circle"
            />
          </p>
        </template>
      </v-checkbox>

      <!-- author details -->
      <div class="d-flex w-100 w-sm-50 mx-auto align-center mb-3">
        <v-divider inset />
        <p
          class="w-100 text-center font-weight-light text-caption text-uppercase"
        >
          Author Details
        </p>
        <v-divider />
      </div>

      <v-text-field
        v-model="blogForm.author.name"
        label="Name"
        prepend-inner-icon="mdi-account-outline"
        :rules="[rules.required]"
      />
      <v-text-field
        v-model="blogForm.author.email"
        label="Email"
        prepend-inner-icon="mdi-email-outline"
        :rules="[rules.required, rules.email]"
      />
    </v-form>
  </BaseDialog>
</template>

<script setup lang="ts">
import { reactive, useTemplateRef } from "vue";
import { v4 as uuid } from "uuid";
import { useRouter } from "vue-router";
import { useBlogStore } from "@/store/blog";
import type Blog from "@/types/Blog";
import moment from "moment";

const props = defineProps<{
  showDialog: boolean;
  blog?: Blog;
}>();
defineEmits(["close"]);

const { createBlog } = useBlogStore();
const router = useRouter();

const form = useTemplateRef("form");
const blogForm = reactive({
  valid: false, // valid status of the form
  id: "",
  title: "",
  type: "",
  date: "",
  featured: false,
  pinned: false,
  image: "",
  draft: true,
  text: "",
  author: {
    name: "",
    email: "",
  },
});

// prefill blog details if blog is passed incase we're editing
if (!!props.blog) {
  const { blog } = props;
  blogForm.id = blog.id;
  blogForm.title = blog.title;
  blogForm.type = blog.type;
  blogForm.date = blog.date;
  blogForm.featured = blog.featured;
  blogForm.pinned = blog.pinned;
  blogForm.image = blog.image;
  blogForm.draft = blog.draft;
  blogForm.text = blog.text;
  blogForm.author = { ...blog.author };
}

const blogTypes = ["LifeStyle", "Technology"];

// validation
const rules = {
  required: (value: string | number) => !!value || "This field is required",
  email: (value: string) => value.includes("@") || "Email is invalid",
};

function proceedToEditor() {
  form.value?.validate();
  if (!blogForm.valid) return;

  blogForm.id = uuid();
  blogForm.date = moment(new Date()).format("YYYY-MM-DDTHH:mm:ss");

  // proceed to save to storage
  /*eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }]*/
  const { valid: _v, ...otherFields } = blogForm;
  const newBlogId = createBlog(otherFields);
  router.push(`/blogs/editor_${newBlogId}`);
}
</script>
