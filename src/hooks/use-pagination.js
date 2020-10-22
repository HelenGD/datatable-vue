import {ref, computed} from "vue";

const pageSize = 50;

export const usePagination = (records) => {
    const currentPage = ref(1);

    const onSwitch = (newPage) => {
        currentPage.value = newPage;
    };

    const sliceRecords = computed(() => {
        const indexOfLastDataItem = currentPage.value * pageSize;
        const indexOfFirstDataItem = indexOfLastDataItem - pageSize;
        return records.value.slice(indexOfFirstDataItem, indexOfLastDataItem);    
    });

    const pages = computed(() => {
        const pagesCount = Math.ceil(records.value.length / pageSize);
        const pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return pages;
    });

    return {
        currentPage,
        sliceRecords,
        pages,
        onSwitch,
    }
};