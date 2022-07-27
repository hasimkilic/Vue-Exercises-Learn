<template>
  <div class="container text-center">
    <!-- {{this.$store.state.user.numbers}}Bu şekilde store içersindeki bilgiyi yazdırabiliyoruz. -->
    <UserList/>
    <NewUser/>
    <hr>
    <br>
    <p>
      {{musteriAdı}}<!--puresol-->
    </p>
  </div>
</template>

<script>
import NewUser from '@/components/NewUser.vue'
import UserList from '@/components/UserList.vue'
import { mapGetters } from 'vuex'
  export default {
    components:{
      NewUser,
      UserList
    },
    data() {
      return {
        
      }
    },
    computed:{
      ...mapGetters({
        musteriAdı:"musteri/_contactName"
      })
    }
    // created(){
    //   console.log(this.$store)// Plugin olduğu için başında dolar  $store şeklinde kullanılmalı 
    //   // console.log(this.$store.person.name)
    //   console.log(this.woodItems)// Bu şekilde computed kısmında mapGetters komutu ile bu şekilde çağırdık. Ve vueinstance üzerinden erişebiliyoruz.
    //   console.log(this.activeUser)// Bu şekilde computed kısmında mapGetters komutu ile bu şekilde çağırdık.
    // },
    // computed:{
    //   // ...mapGetters(["_woodItems","_activeUser"]),
    //   ...mapGetters({
    //     woodItems:"_woodItems",
    //     activeUser:"_activeUser"
    //   })
    //   //Aşağıdaki kullanım ile normal computed yazabiliyoruz.
    //   // customComputed(){

    //   // }
    // }
      
  }
</script>

<style >

</style>