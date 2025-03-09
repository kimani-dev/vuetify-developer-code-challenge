import { computed } from "vue";

export function useWordSafeSubstring(text: string, maxLength: number) {
  return computed(() => {
    if (!text || text.length <= maxLength) return text;

    const trimmedText = text.substring(0, maxLength);
    const lastSpaceIndex = trimmedText.lastIndexOf(" ");

    return lastSpaceIndex !== -1 ? trimmedText.substring(0, lastSpaceIndex) + "..." : "";
  });
}