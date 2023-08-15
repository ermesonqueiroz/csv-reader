import { defineStore } from "pinia"
import {ref} from "vue";

export const useDataStore = defineStore('DataStore', () => {
    const data = ref(null);
    const setData = (newData) => data.value = newData;

    return { data, setData }
})
