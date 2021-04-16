<template>
  <div class="flex flex-col space-y-12">
      <input type="text" class="w-3/4 text-4xl px-6 py-3 border border-gray-400" placeholder="Timer Name" v-model="name">
      <input type="time" class="w-3/4 text-4xl px-6 py-3 border border-gray-400" v-model="time">
      <input type="date" class="w-3/4 text-4xl px-6 py-3 border border-gray-400" v-model="date">
      <button class="text-3xl w-1/4 px-12 py-3 bg-blue-600 text-gray-200 self-end mr-32" @click="newTimer">Finish</button>
  </div>
</template>

<script>
export default {
    name: "AddTimerForm",
    data() {
        return {
            date: null,
            time: "00:00:01",
            name: null
        }
    },
    methods: {
        newTimer(){
            
        }
    },
    updated() {
        console.log(this.time);
    },
}
</script>

<style>

</style>