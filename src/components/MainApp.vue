<script setup>

</script>

<template>
  <div id="page-1" class="bgC" >
    <img src="../assets/picture/bg.jpg"  class="bgIMG" alt="背景图"/>
  </div>
</template>

<style scoped>
#page-1 {
  display: flex;
  min-height: 80vh;
  overflow: hidden;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.bgIMG {
  width: 100%;
  height: 80%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.bgC {
  width: 100%;
  text-align:center;
}
</style>
<!--
.bgIMG {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}-->