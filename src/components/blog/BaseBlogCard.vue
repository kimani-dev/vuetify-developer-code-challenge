<template>
  <v-hover open-delay="100">
    <template #default="{ isHovering, props }">
      <v-card
        v-bind="props"
        flat
        color="transparent"
        :ripple="false"
        :elevation="0"
        :rounded
        :to="{ path: `/blogs/${id}`}"
      >
        <slot :is-hovering="!!isHovering" />
      </v-card>
    </template>
  </v-hover>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    rounded?: string;
    id: number;
  }>(),
  {
    rounded: "t-xl",
    id: undefined,
  }
);
</script>
