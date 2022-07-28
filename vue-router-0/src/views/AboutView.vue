<template>
  <div class=" container about">
    <h1>{{title}}</h1>
    <button @click="backToHome" class="red">Ana Sayfaya dönmek için tıklayınız..</button>
  </div>
</template>

<script>
export default{
  data() {
    return {
      title:'About Sayfası'
    }
  },
  methods: {
    backToHome(){
      this.$router.push("/")// Bu şekilde home sayfasına geçiş yaptık.
    }
  },
}

</script>
