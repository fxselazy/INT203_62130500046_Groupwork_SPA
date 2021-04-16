<template>
  <div class="flex justify-between py-3 px-12">
    <div class="text-3xl w-3/4 grid grid-cols-3">
      <p class="text-left">{{ name }}</p>
      <p class="col-span-2">{{ stringTimeLeft }}</p>
    </div>
    <div class="space-x-4">
      <button class="w-8 h-8 bg-gray-400"></button>
      <button class="w-8 h-8 bg-red-400"></button>
    </div>
  </div>
</template>

<script>
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
export default {
  name: "Timer",
  props: {
    name: String,
    date: String,
    time: String,
    id: String,
  },
  data() {
    return {
      timeLeft: {
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
      },
      interval: null
    };
  },
  computed: {
    dateTime() {
      return new Date(this.date + " " + this.time);
    },
    stringTimeLeft(){
      return `${this.timeLeft.day} day(s) ${this.timeLeft.hour}:${this.timeLeft.minute}:${this.timeLeft.second}`
    }
  },
  methods: {
    dateTimeLeftCal(){
      
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      let timeLeft = this.dateTime.getTime() - new Date().getTime();
      let dayLeft = Math.floor(timeLeft / DAY);
      let hourLeft = Math.floor((timeLeft % DAY) / HOUR);
      let minuteLeft = Math.floor((timeLeft % HOUR) / MINUTE);
      let secondLeft = Math.floor((timeLeft % MINUTE) / SECOND);
      this.timeLeft.day = dayLeft;
      this.timeLeft.hour = hourLeft;
      this.timeLeft.minute = minuteLeft;
      this.timeLeft.second = secondLeft;
    }, 1000);
  },
  beforeUnmount(){
    clearInterval(this.interval);
  }
};
</script>

<style></style>
