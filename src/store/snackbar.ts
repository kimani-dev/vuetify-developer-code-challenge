import { defineStore } from "pinia";
import { ref } from "vue";

interface SnackBarData {
  text: string;
  type: "error" | "success" | "info";
  actionText?: string;
  actionFn?: () => void;
}

export const useSnackBarStore = defineStore("snackbar", () => {
  const snackBarData = ref<SnackBarData>({
    text: "",
    type: "" as "error" | "success" | "info",
    actionText: "Close",
    actionFn: () => {},
  });

  function showSnackBar(data: SnackBarData) {
    snackBarData.value = { ...snackBarData.value, ...data };
  }

  return {
    snackBarData,
    showSnackBar,
  };
});
