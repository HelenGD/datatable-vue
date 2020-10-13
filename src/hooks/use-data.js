import { onMounted, ref, watch } from "vue";
import { fetchData } from "../api";

export const useData = ({checked}) => {
  const data = ref([]);
  const isLoading = ref(false);

  const load = () => {
    data.value = [];
    isLoading.value = true;
    fetchData(checked.value === 'radio-1' ? 32 : 1000)
      .then(response => {
        data.value = response
      })
      .then(() => {
        isLoading.value = false;
      })
      .catch(console.error)
  }

  onMounted(load);
  watch(checked, load);

  return {
    data,
    isLoading,
  }
};