<template>
    <div>
        <button @click="updateName" >Veri Ekle</button>
    </div>
</template>

<script >
export default {
    data() {
        return {
            
        }
    },
    methods: {
      updateName(){
        const userData = {id:new Date().getTime(),item:"Raf",type:"mobilya"}
        this.$store.dispatch("newItem",userData)
        // this.$store.commit("newItem",userData) // commit () bu komut ile mutations da yazıdklarımı çağırıyoruz.
        // this.$store.state.fullName = new Date().getTime();//Dinamik şekilde storedan gelen bilgiyi butona tıkladıkça değer değiştiriyoruz.
      }
    },
}
</script>

<style scoped>

</style>