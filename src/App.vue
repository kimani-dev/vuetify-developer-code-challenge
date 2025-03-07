<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-responsive
      :max-width="xlAndUp ? 1300 : '100%'"
      :class="xlAndUp ? 'align-centerfill-height mx-auto' : ''"
    >
      <v-app>
        <AppBar />
        <v-main>
          <router-view v-slot="{Component, route}">
            <Transition :name="route.meta.transition as string ?? 'scale-transition'">
              <div :key="route.path">
                <component :is="Component" />
              </div>
            </Transition>
          </router-view>
        </v-main>
      </v-app>
    </v-responsive>
  </v-container>

  <!-- show alerts -->
  <Alert />
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify";

const { xlAndUp } = useDisplay();
</script>
