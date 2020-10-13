<template>
  <div>
     <input 
          id="small-data" 
          type="radio" 
          name="radio" 
          value="radio-1"
          :checked="checked === 'radio-1'"
          @change="$emit('change', $event.target.value)"
        />
        <label htmlFor="small-data">Мало данных</label>
        <input 
          id="big-data" 
          type="radio" 
          name="radio" 
          value="radio-2"
          :checked="checked === 'radio-2'"
          @change="$emit('change', $event.target.value)"
        />
        <label htmlFor="big-data">Много данных</label>
  </div>
</template>

<script>
export default {
  name: 'Switcher',
  emits: ['change'],
  props: {
    checked: String,
  }
}
</script>