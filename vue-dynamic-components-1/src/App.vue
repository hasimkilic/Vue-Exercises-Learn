<template>
  <div class="container text-center">
    <div class="d-flex justify-content-between align-items-center">
      <button class="red" @click="activeComponent ='Red'">Red</button>
      <button class="blue" @click="activeComponent ='Blue'">Blue</button>
      <button class="green" @click="activeComponent ='Green'">Green</button>
    </div>
    <!-- <RedComp v-if="activeComponent == 'Red'" class="my-2"/>
    <BlueComp v-if="activeComponent == 'Blue'" class="my-2"/>
    <GreenComp v-if="activeComponent == 'Green'" class="my-2"/> -->
  </div>
<!--Yukarıdaki componentlerin kısa kullanım şekli propta kullanırız. çalışıyor-->
  <!--Bu keep-alive komutu lifecycle düzenini bozuyor. Ve bize iki tane hook veriyor activated() ve deactiveted() bu iki hook kullanarak componenti yönetebiliriz.-->
  <!--keep-alive olmasaydı hepsi aynı şekilde mounted() oluyordu. Ama bunları yukarıdaki iki hook ile yönetebiliyoruz.-->
  <keep-alive>
  <component :is="activeComponent+'Comp'" msg="Red Component" > <!--prop, event, emit, provide, inject hepsi çalışır.-->
      <h3 class="bg-green text-white my-2">Green Component</h3> <!--Bu şekilde slot kullanımıda yapabiliriz.-->
  </component>
  </keep-alive>
</template>

<script>
import RedComp from '@/components/RedComp'
import GreenComp from '@/components/GreenComp'
import BlueComp from '@/components/BlueComp'
  export default {
    components:{
      RedComp,
      GreenComp,
      BlueComp
    },
    data() {
      return {
        activeComponent:'Red',
      }
      
    },
  }
</script>

<style scoped>

</style>