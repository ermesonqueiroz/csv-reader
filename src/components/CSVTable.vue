<script setup>
const props = defineProps(['content']);
</script>

<template>
    <div class="absolute left-1/2 my-14 -translate-x-1/2 overflow-auto shadow-md rounded-lg w-full max-w-5xl">
        <table class="table-auto w-full text-sm text-left text-gray-400">
            <thead class="text-xs uppercase bg-zinc-700 text-gray-400 whitespace-nowrap">
                <tr>
                    <th
                        :key="item"
                        v-for="item in Object.keys(props.content[0])"
                        class="px-6 py-3"
                    >
                        {{ item }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    :key="JSON.stringify(row)"
                    v-for="row in Object.values(props.content)"
                    class="border-b bg-neutral-800 border-gray-700"
                >
                    <td
                        :key="item"
                        v-for="item in row"
                        class="px-6 py-4"
                    >
                        {{ item }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
