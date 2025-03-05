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
          <div class="pa-xl-2">
            <router-view />
          </div>
        </v-main>
      </v-app>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify";

const { xlAndUp } = useDisplay();
</script>
