<template>
  <div class="flex flex-col space-y-12">
    <input
      type="text"
      class="w-3/4 text-4xl px-6 py-3 border border-gray-400"
      placeholder="Timer Name"
      v-model="name"
    />
    <input
      type="time"
      class="w-3/4 text-4xl px-6 py-3 border border-gray-400"
      v-model="time"
    />
    <input
      type="date"
      class="w-3/4 text-4xl px-6 py-3 border border-gray-400"
      v-model="date"
    />
    <ul
      v-for="(error, index) in errors"
      :key="index"
      class="text-lg text-red-500"
    >
      {{
        error
      }}
    </ul>
    <button
      class="text-3xl w-1/4 px-12 py-3 bg-blue-600 text-gray-200 self-end mr-32"
      @click="newTimer"
    >
      Finish
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TimerForm",
  data() {
    return {
      date: null,
      time: "23:59:59",
      name: null,
      errors: [],
    };
  },
  props: {
    edit: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    newTimer() {
      if (this.name != null || this.date != null) {
        if (this.edit) {
          console.log("edit");
        } else {
          axios.post("http://localhost:3000/timer", {
            name: this.name,
            data: this.date,
            time: this.time,
          }).then(()=>{
              this.$router.push("/");
          });
        }
      } else {
        if (this.errors.filter((error)=>error=="Please fill all blanked form").length==0) {
            this.errors.push("Please fill all blanked form");
        }
      }
    },
  },
  updated() {
    console.log(this.time);
  },
};
</script>

<style></style>
