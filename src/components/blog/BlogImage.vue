<template>
  <div class="overflow-hidden rounded-xl">
    <v-img
      :src
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
      cover
    >
      <v-fade-transition>
        <slot />
      </v-fade-transition>
    </v-img>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  height: string;
  width: string;
  src: string;
  contentClass?: string;
  gradient?: string;
  isHovering?: boolean;
}>();
</script>
