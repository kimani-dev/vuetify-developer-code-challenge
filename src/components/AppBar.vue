<template>
  <v-app-bar>
    <div class="d-flex w-100 px-2 justify-space-between ga-2">
      <AppCustomLogo />

      <v-btn
        :icon="
          currentTheme == 'light'
            ? 'mdi-weather-night'
            : 'mdi-white-balance-sunny'
        "
        @click="toggleTheme"
      />
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useTheme } from "vuetify";

// switch theme
const currentTheme = ref("light");

const theme = useTheme();
const themeName = computed(() =>
  theme.global.current.value.dark ? "dark" : "light"
);
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
  currentTheme.value = themeName.value;
}
</script>
