<template>
  <div class= "container home">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eligendi porro mollitia natus eum, beatae exercitationem. Libero quidem nihil, necessitatibus quo voluptatibus, accusantium sequi distinctio modi quia perferendis maxime amet? Aperiam, eius. Placeat itaque assumenda exercitationem! Adipisci quae quaerat autem mollitia inventore itaque similique totam, sequi repudiandae minus voluptas vel.</p>
    <button @click="goToDetail" class="green text-right">Detaylara için tıklayınız.</button>
    <button @click="goToAbout" class="blue text-right">About Sayfasına Geçmek için tıklayınız..</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      
    }
  },
  methods: {
    goToDetail(){
      this.$router.push("/contact")
    },
    goToAbout(){
      this.$router.push("/about")
    }
  },
}
</script>
