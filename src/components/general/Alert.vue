<template>
  <v-snackbar
    v-model="showSnackBar"
    :text="snackBarData.text"
    :color="snackBarData.type"
    close-on-content-click
    multi-line
  >
    <template
      v-if="!!snackBarData.actionText"
      #actions
    >
      <v-btn
        color="primary"
        variant="elevated"
        :text="snackBarData.actionText"
        @click="snackBarData.actionFn"
      />
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { useSnackBarStore } from "@/store/snackbar";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";

const snackBarStore = useSnackBarStore();
const { snackBarData } = storeToRefs(snackBarStore);
const showSnackBar = ref(false);

watch(snackBarData, () => {
  showSnackBar.value = true;
});
</script>
