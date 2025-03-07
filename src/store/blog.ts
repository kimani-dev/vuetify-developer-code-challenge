import { defineStore } from "pinia";
import { computed, onMounted } from "vue";
import { v4 as uuid } from "uuid";
import data from "../blog.json";
import type Blog from "@/types/Blog";
import { useStorage } from "@vueuse/core";

export const useBlogStore = defineStore("blog", () => {
  const blogs = useStorage<Blog[]>("blogs", []);

  // getters
  const sortedBlogs = computed(() =>
    blogs.value.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    )
  );
  const pinnedBlog = computed(() => blogs.value.find((blog) => blog.pinned)); // fetch the latest pinned blog
  const featuredBlogs = computed(() =>
    blogs.value.filter((blog) => blog.featured)
  );
  const otherBlogs = computed(() =>
    blogs.value.filter((blog) => !blog.pinned && !blog.featured)
  );

  // methods
  function createBlog(blog: Blog) {
    blogs.value.push(blog);
    return blog.id;
  }

  function updateBlog(id: string, data: Partial<Blog>) {
    const index = blogs.value.findIndex((blog) => blog.id === id);
    if (index !== -1) {
      blogs.value[index] = { ...blogs.value[index], ...data };
    }
  }

  // add static blogs when there are no blogs
  onMounted(() => {
    if (blogs.value.length === 0) {
      blogs.value.push(
        ...data.blogs.map((blog) => ({
          ...blog,
          id: uuid(),
        }))
      );
    }
  });

  return {
    blogs: sortedBlogs,
    pinnedBlog,
    featuredBlogs,
    otherBlogs,
    createBlog,
    updateBlog,
  };
});
