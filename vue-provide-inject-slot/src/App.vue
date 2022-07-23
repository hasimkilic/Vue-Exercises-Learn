<template>
  <div>
    <!-- <ModalComp :title="'Modal Title'" :content="'Content'"/>  Prop ile kullandığımz durum bu şekildedir. Ama proje büydükçe karışıklık yaratır.-->
    <ModalComp :onSave="onSave" >
      <!-- <h3>Slot İle gelen Title Bilgisi</h3> --> <!--ModalComp tan gelen slot bilgisi bu şekilde yazdırılır.-->
      <template #title><!--Bu şekilde name belirterek slottan çekiyoruz veriyi-->
        <h3>Slot İle gelen Title Bilgisi</h3>
      </template>
      <!-- <template v-slot:content></template>  Aşağıdaki kullanım ile aynı şey-->
      <template #content>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ullam ex quos ut tempora? Saepe suscipit sequi nulla adipisci quia ipsum alias nihil, sed dolorum iusto quo temporibus aperiam laborum repellat nesciunt culpa, inventore quis eveniet ea corporis distinctio quae, iste sint cupiditate! Placeat illum pariatur, minus in reiciendis mollitia.
        </p>
      </template>
      <!--Aşağıdaki şekildeki gibi kullanımı vardır. slot props yöntemi -->
      <template v-slot="slotProps">
        {{slotProps.text}}
        {{slotProps.count}}
      </template>
    </ModalComp>
  </div>
</template>

<script>
import ModalComp from '@/components/ModalComp'

  export default {
    components:{
      ModalComp
    },
    data() {
      return {
        
      }
    },
    methods: {
      onSave(){
        alert('Saved')
      }
    },
  }
</script>
