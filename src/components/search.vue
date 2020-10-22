<template>
  <form 
    className="search-form" 
    @submit="handleSubmit">
    <input 
      type="text" 
      v-model="value"
    />
    <button type="submit">Найти</button>
  </form>
</template>

<script>
import {ref} from "vue";

export default {
  name: "Search",
  emits: ['submit'],
  setup(_, {emit}) {
    const value = ref("");
    
    const handleSubmit = (e) => {
      e.preventDefault();
      emit('submit', value.value);
    }

    return {
        value, 
        handleSubmit
    }
  }
};
</script>

<style scoped>
.search-form {
  padding: 20px;
}
</style>