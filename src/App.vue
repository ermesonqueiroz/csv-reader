<script setup>
import CSVTable from "@/components/CSVTable.vue";
import { useDataStore } from "@/stores/DataStore";
import { parseCSV } from "@/common/parse-csv";

const dataStore = useDataStore();

async function onFileChange(e) {
  const [file] = e.target.files;
  const fileText = await file.text();

  dataStore.setData(
      parseCSV(fileText.trim())
  );
}
</script>

<template>
  <CSVTable v-if="!!dataStore?.data" />
  <input
      v-else
      type="file"
      v-on:change="onFileChange"
      accept="text/csv"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-800 rounded-md p-2 text-slate-500
        file:mr-4 file:py-2 file:px-4 file:rounded-md
        file:border-0 file:font-medium
        file:bg-green-50 file:text-green-700
        hover:file:bg-green-100"
  />
</template>