<template>
  <div class="overflow-hidden rounded-xl">
    <v-img
      :src="
        !!src
          ? src
          : $vuetify.theme.current.dark
            ? '/blog-image-dark.svg'
            : '/blog-image-dark.svg'
      "
      class="overflow-hidden position-relative"
      :width
      :height
      :content-class
      :gradient
      :style="{
        transform: isHovering ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s ease-in-out',
      }"
      transition="scale-transition"
      :cover="!!src"
      @error="handleImageError"
    >
      <v-fade-transition>
        <slot />
      </v-fade-transition>
    </v-img>
  </div>
</template>

<script setup lang="ts">
import { useSnackBarStore } from "@/store/snackbar";

defineProps<{
  height: string;
  width: string;
  src: string;
  contentClass?: string;
  gradient?: string;
  isHovering?: boolean;
}>();

const { showSnackBar } = useSnackBarStore();
function handleImageError(e: string | undefined) {
  showSnackBar({
    text: `Error loading our images: ${e}. Please try hard reloading with CTRL + SHIFT + R`,
    type: "error",
    actionText: "Close",
  });
}
</script>
