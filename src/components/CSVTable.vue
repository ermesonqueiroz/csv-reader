<script setup>
import { useDataStore } from "@/stores/DataStore";

const dataStore = useDataStore();
const header = Object.keys(dataStore.data[0]);
const rows = Object.values(dataStore.data);
</script>

<template>
    <div class="absolute left-1/2 my-14 -translate-x-1/2 overflow-auto shadow-md rounded-lg w-full max-w-5xl">
        <table class="table-auto w-full text-sm text-left text-gray-400">
            <thead class="text-xs uppercase bg-zinc-700 text-gray-400 whitespace-nowrap">
                <tr>
                    <th
                        v-for="item in header"
                        :key="item"
                        class="px-6 py-3"
                    >
                        {{ item }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="row in rows"
                    :key="JSON.stringify(row)"
                    class="border-t bg-neutral-800 border-gray-700"
                >
                    <td
                        v-for="item in row"
                        :key="item"
                        class="px-6 py-4"
                    >
                        {{ item }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
