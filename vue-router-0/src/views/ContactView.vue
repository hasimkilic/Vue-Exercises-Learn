<template>
    <div class="container contact">
        <p>Açıklamalar bu sayfa içerisinde yer alacaktır.</p>
        <button @click="goBack" class="blue">Ana sayfa Dönmek için tıklayınızz..</button>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            goBack(){
                this.$router.push("/")//Home sayfasına gider
            }
        },
    }
</script>

