<template>
  <div className="pagination-container">
    <button
      :class="{
        'pagination-button': true,
        'pagination-button-active': currentPage === page,
      }"
      type="button"
      v-for="page in pages"
      :key="page + 1"
      @click="$emit('switch', page)"
    >
      {{ page }}
    </button>
  </div>
</template>

<script>
import { toRefs } from "vue";

export default {
  name: "Pagination",
  emits: ['switch'],
  props: {
    currentPage: Number,
    pages: Array,
  },
  setup(props) {
    return {
      ...toRefs(props),
    };
  },
};
</script>
<style scoped>
.pagination-button {
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: #ffffff;
  border: 1px solid gray;
}

.pagination-button-active {
  background-color: black;
  color: white;
  border: 1px solid gray;
  font-weight: bold;
}

.pagination-container {
  padding: 20px;
}
</style>
