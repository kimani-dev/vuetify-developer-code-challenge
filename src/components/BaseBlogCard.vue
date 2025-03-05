<template>
  <v-hover open-delay="100">
    <template #default="{ isHovering, props }">
      <v-card
        v-bind="props"
        flat
        color="transparent"
        link
        :ripple="false"
        :elevation="0"
        :rounded
      >
        <slot :is-hovering="isHovering" />
      </v-card>
    </template>
  </v-hover>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    rounded?: string;
    href?: string;
  }>(),
  {
    rounded: "t-xl",
    href: "",
  }
);
</script>
