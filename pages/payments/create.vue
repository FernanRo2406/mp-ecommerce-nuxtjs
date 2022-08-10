<script setup>
const mpBricks = useMpBricks();
</script>
<template>
  <div class="bg-white">
    <div v-html="mpBricks"></div>
    <div id="cardPaymentBrick_container"></div>
  </div>
</template>
