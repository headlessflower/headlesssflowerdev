<script setup lang="ts">
defineProps({
  title: String,
  subtitle: String,
  buttonText: String,
  bgImg: String,

})
</script>

<template>
  <div class="w-full h-[75vh] mt-10 py-16 bg-cover bg-center" :style="{ backgroundImage: `url(${bgImg})` }" >

    <div class="bg-white w-1/3 rounded-md p-8 ml-16">

      <h1 class="text-5xl">{{title}}</h1>
      <strong>{{subtitle}}</strong>


    </div>



  </div>

</template>

<style scoped>

</style>