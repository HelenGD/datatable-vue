<template>
  <div class="table-container">
      <table class="table">
        <tbody>
          <tr>
              <th
                v-for="column in columns"
                :key="column"
                class="table-cell"
                @click="$emit('sort', column)"   
              >
                {{column}}
                <span v-if="props.sort.column === column">
                  {{props.sort.order === "asc" ? "▲" : "▼"}}
                </span>
              </th>
          </tr>
          <tr
            v-for="item in props.data"
            :key="item.id + item.email"
            @click="setTableRow(item)"
          >
              <td class="table-column">{{item.id}}</td>
              <td class="table-column">{{item.firstName}}</td>
              <td class="table-column">{{item.lastName}}</td>
              <td class="table-column">{{item.email}}</td>
              <td class="table-column">{{item.phone}}</td>
              <td class="table-column">
                {{Object.values(item.address).join(', ')}}
              </td>
              <td class="table-column">{{item.description}}</td>
            </tr>

        </tbody>
      </table>
      <div></div>
  </div>
</template>

<script>

const columns = [
  'id',
  'firstName',
  'lastName',
  'email',
  'phone',
  'address',
  'description',
];
export default {
  name: 'DataTable',
  props: {
    sort: Object,
    data: Array,
  },
  setup(props) {
    return {
      props,
      columns,
    }
  }
}
</script>

<style scoped>
    
.table-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.table {
  border-spacing: 0;
  border-collapse: collapse;
}

.table-cell {
  border: 2px solid black;
  padding: 10px;
}

.table-column {
  border: 2px solid black;
  text-align: center;
  padding: 10px;
}
</style>