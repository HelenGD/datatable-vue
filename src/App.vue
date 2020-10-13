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
</template>

<script>
import switcher from './components/switcher';
import { useData } from './hooks/use-data';
import { ref } from "vue";

export default {
  name: 'App',
  components: {
    switcher,
  },
  setup() {
      const checked= ref("radio-1");
      const setChecked = value => {
        checked.value = value;
      }

    const {
      isLoading,
      data,
    } = useData({checked});

    return {
      isLoading,
      data,
      checked,
      setChecked,
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
