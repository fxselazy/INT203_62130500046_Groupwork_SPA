<template>
  <div class="mt-20">
    <timer
      :name="timer.name"
      :date="timer.date"
      :time="timer.time"
      :id="timer.id"
      :preview="true"
      class="border border-gray-800 w-3/4 mx-auto rounded-lg"
    ></timer>
    <div class="mt-8 space-y-8">
      <input
        type="text"
        class="w-3/4 text-4xl px-6 py-3 border border-gray-400 rounded-lg"
        placeholder="Timer Name"
        v-model="timer.name"
      />
      <input
        type="time"
        class="w-3/4 text-4xl px-6 py-3 border border-gray-400 rounded-lg"
        v-model="timer.time"
      />
      <input
        type="date"
        class="w-3/4 text-4xl px-6 py-3 border border-gray-400 rounded-lg"
        v-model="timer.date"
      />
      <br>
      <button class="mx-auto px-8 py-2 text-2xl bg-blue-600 text-white rounded-md" @click="put">submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Timer from "@/components/Timer.vue";
export default {
  name: "EditTimer",
  data() {
    return {
      timer: {},
    };
  },
  components: {
    Timer,
  },
  methods: {
      put(){
          axios.put("http://localhost:3000/timer/" + this.timer.id, this.timer).then(()=>{
              this.$router.push("/timerlist");
          })
      }
  },
  mounted() {
    axios
      .get("http://localhost:3000/timer/" + this.$route.params.id)
      .then((result) => {
          
        this.timer = result.data;
        console.log(this.timer);
      });
  },
};
</script>

<style></style>
