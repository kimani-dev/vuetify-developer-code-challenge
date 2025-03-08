<template>
  <v-app-bar>
    <div class="d-flex w-100 px-2 justify-space-between ga-2">
      <AppCustomLogo />

      <!-- blog links -->
      <div class="d-none d-sm-flex ga-2 align-center">
        <v-btn
          variant="text"
          text="Home"
          :to="{ path: '/' }"
        />
        <v-btn
          variant="text"
          text="Your Blogs"
          :to="{path: '/blogs/myblogs'}"
        />

        <v-divider
          inset
          vertical
        />

        <!-- external links -->
        <v-btn
          variant="text"
          text="GitHub"
          target="_blank"
          href="https://github.com/kimani-dev/vuetify-developer-code-challenge"
        />
        <v-btn
          variant="text"
          text="Documentation"
          target="_blank"
          href="https://vuetifyjs.com"
        />
      </div>

      <div class="d-flex align-center ga-1">
        <!-- theme toggle -->
        <v-btn
          :icon="
            currentTheme == 'light'
              ? 'mdi-weather-night'
              : 'mdi-white-balance-sunny'
          "
          density="compact"
          @click="toggleTheme"
        />

        <!-- notifications -->
        <v-menu>
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              icon="mdi-bell-outline"
              density="compact"
              class="mr-1"
            />
          </template>

          <v-card
            width="300"
            title="Notifications"
            subtitle="Your notifications"
          >
            <template #text>
              <v-list-item
                title="You're all caught up"
                prepend-icon="mdi-creation-outline"
              />
            </template>
            <template #append>
              <v-btn
                text="See All"
                size="small"
                append-icon="mdi-chevron-right"
                variant-outlined
              />
            </template>
          </v-card>
        </v-menu>

        <!-- avatar -->
        <v-avatar image="https://i.pravatar.cc/100?img=2" />
      </div>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useStorage } from "@vueuse/core";
import { computed } from "vue";
import { useTheme } from "vuetify";

// switch theme
const currentTheme = useStorage("theme","light");

const theme = useTheme();
const themeName = computed(() =>
  theme.global.current.value.dark ? "dark" : "light"
);
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
  currentTheme.value = themeName.value;
}
</script>
