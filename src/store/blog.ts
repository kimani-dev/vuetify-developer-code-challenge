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
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  );
  const sortedBlogsWithoutDrafts = computed(() =>
    sortedBlogs.value.filter(({ draft }) => !draft)
  );
  const pinnedBlog = computed(() =>
    sortedBlogsWithoutDrafts.value.find((blog) => blog.pinned)
  ); // fetch the latest pinned blog
  const featuredBlogs = computed(() =>
    sortedBlogsWithoutDrafts.value.filter((blog) => blog.featured)
  );
  const otherBlogs = computed(() =>
    sortedBlogsWithoutDrafts.value.filter(
      (blog) => !blog.pinned && !blog.featured
    )
  );
  // types
  const blogTypes = computed(() =>
    Array.from(new Set(blogs.value.map(({ type }) => type)))
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

  // publish blog
  function publishBlog(id: string) {
    const index = blogs.value.findIndex((blog) => blog.id === id);
    if (index !== -1) {
      blogs.value[index].draft = false;
    }
  }

  // delete blog
  function deleteBlog(id: string) {
    const index = blogs.value.findIndex((blog) => blog.id === id);
    if (index !== -1) {
      blogs.value.splice(index, 1);
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
    blogs: sortedBlogsWithoutDrafts,
    allBlogs: sortedBlogs,
    pinnedBlog,
    featuredBlogs,
    otherBlogs,
    blogTypes,
    createBlog,
    updateBlog,
    publishBlog,
    deleteBlog,
  };
});
