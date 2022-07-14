<script >
import CounterItem from "@/components/CounterItem"
export default{
  components:{
    CounterItem,
    
  }
};
</script>

<template>
  <div>
  <appHeaderVue/><!--Global bir şekilde bunu import ettik. main.js dosyasında import edilmiş şekilde.-->
  <CounterItem/><!--Sadece bu sayfaya import ettik-->
  </div>
</template>

<style>

</style>