<template>
    <div class="container">
        <div class="header">
            <slot name="title"/>
        </div>
        <hr>
        <div class="content">
            <slot name="content"/>
        </div>
        <hr>
        <div class="footer">
            <button>Kapat</button>
            <button @click="onSave" >Kaydet</button>
        </div>
        <div>
            <slot :text="'Bu değişik slot kullanımı'" :count="1" />
        </div>
    </div>
</template>

<script>
    export default {
        props:['onSave','content','title'],
        data() {
            return {
                
            }
        },
    }
</script>

<style scoped>

</style>