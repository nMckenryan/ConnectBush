// store.js
import { reactive } from "vue";

export const store = reactive({
  isLoading: true,
  loadingDone: () => {
    isLoading: false;
  },
});
