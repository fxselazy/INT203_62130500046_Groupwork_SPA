<template>
  <div class="home flex justify-center items-center w-full h-screen">
    <div class="flex flex-col items-center space-y-24">
      <h1 class="text-6xl font-bold">Timer Website</h1>
      <div class="flex space-x-8 text-2xl">
        <router-link to="">
          <button class="bg-gray-300 py-2 px-6">
            your timer
          </button>
        </router-link>
        <router-link to="/newtimer">
          <button class="bg-green-400 py-2 px-6">
            add timer
          </button>
        </router-link>
      </div>
      <div class="h-8"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
