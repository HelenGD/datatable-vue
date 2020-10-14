<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <switcher 
    :checked="checked"
    @change="setChecked"
  />
  <div>
    {{isLoading ? 'loading...': ''}}
    rows {{data.length}}
  </div>
  <loader v-if="isLoading" />
  <data-table 
    v-if="!isLoading" 
    :data="sortedData" 
    :sort="sort"
    @sort="onSort"
  />
</template>

<script>
import Switcher from './components/switcher';
import Loader from './components/loader';
import DataTable from './components/data-table';
import { useData } from './hooks/use-data';
import { useSort } from './hooks/use-sort';
import { getSortedRecords } from "./utils"
import { ref, computed } from "vue";

export default {
  name: 'App',
  components: {
    Switcher,
    Loader,
    DataTable,
  },
  setup() {
     const {sort, onSort} = useSort();
  
      const checked= ref("radio-1");
      const setChecked = value => {
        checked.value = value;
      }

    const {
      isLoading,
      data,
    } = useData({checked});

    const sortedData = computed(() => getSortedRecords(data.value, sort));
    return {
      isLoading,
      data,
      sortedData,
      checked,
      setChecked,
      sort,
      onSort,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
