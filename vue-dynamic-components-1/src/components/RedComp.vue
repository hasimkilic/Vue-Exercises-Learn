<template>
    <div>
        <h3 class="bg-red text-white">{{msg}}</h3>
        <input type="text" placeholder="Hello World">
    </div>
</template>

<script>
    export default {
        props:['msg'],
        mounted(){
            console.log('Red mounted')
        },
    }
</script>

<style scoped>

</style>