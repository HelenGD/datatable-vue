import { reactive } from "vue";

const invertDirect = {
  asc: 'desc',
  desc: 'asc'
};

export const useSort = () => {
  const sort = reactive({
    order: 'asc',
    column: 'id'
  });

  const onSort = (column) => {
    sort.column = column;
    sort.order =  sort.column === column
      ? invertDirect[sort.order]
      : sort.order; 
  };

  return {
    sort,
    onSort,
  }
};