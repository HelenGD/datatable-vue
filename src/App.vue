<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <search @submit="handleSubmitFilter"/>
  <switcher 
    :checked="checked"
    @change="setChecked"
  />
  <pagination 
    @switch="onSwitch"
    :currentPage="currentPage"
    :pages="pages"
  />
  <loader v-if="isLoading" />
  <data-table 
    v-if="!isLoading" 
    :data="sliceRecords" 
    :sort="sort"
    @sort="onSort"
  />
</template>

<script>
import Switcher from './components/switcher';
import Loader from './components/loader';
import DataTable from './components/data-table';
import Search from './components/search';
import Pagination from './components/pagination';
import { useData } from './hooks/use-data';
import { useSort } from './hooks/use-sort';
import { usePagination } from './hooks/use-pagination';
import { getSortedRecords } from "./utils"
import { ref, computed, watch } from "vue";

export default {
  name: 'App',
  components: {
    Switcher,
    Loader,
    DataTable,
    Search,
    Pagination,
  },
  setup() {
    const {sort, onSort} = useSort();
    const findFilter = ref("");

    const handleSubmitFilter = value => {
      findFilter.value = value;
    }
  
    const checked = ref("radio-1");
    const setChecked = value => {
      checked.value = value;
    }

    const {
      isLoading,
      data,
    } = useData({checked});

    const filteredData = computed(() => data.value.filter(row => JSON
      .stringify(row)
      .toLowerCase()
      .includes(findFilter.value.toLowerCase())
    ));

    const sortedData = computed(() => getSortedRecords(filteredData.value, sort));
    
    const {
        currentPage,
        sliceRecords,
        pages,
        onSwitch,
    } = usePagination(sortedData);

    watch(filteredData, () => {
      onSwitch(1);
    });
    
    return {
      isLoading,
      data,
      sortedData,
      checked,
      setChecked,
      sort,
      onSort,
      handleSubmitFilter,
      currentPage,
      sliceRecords,
      pages,
      onSwitch,
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
