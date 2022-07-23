<template>
    <div>
        <h3 class="bg-blue text-white">Blue Component</h3>
        <input type="text" placeholder="Hello World">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        mounted(){
            console.log('Blue mounted')
        },
        activated() {
            console.log('Blue activated')
        },
        deactivated() {
            console.log('Blue deActivated')
        },
    }
</script>

<style lang="scss" scoped>

</style>