<template>
  <div class="mt-20">
      <h1 class="text-left text-6xl font-bold border-b-2 border-gray-300 ">Your timer</h1>
      <div class="mt-20 divide-y">
          <timer :name="timer.name" :date="timer.date" :time="timer.time" :id="timer.id" v-for="timer in timers" :key="timer.id"></timer>
      </div>
  </div>
</template>

<script>
import Timer from "@/components/Timer.vue";
import axios from 'axios';
export default {
    name: "TimerList",
    data() {
        return {
            timers: []
        }
    },
    components:{
        Timer
    },
    mounted(){
        axios.get("http://localhost:3000/timer").then((result)=>{
            this.timers = result.data;
        })
    }

}
</script>

<style>

</style>