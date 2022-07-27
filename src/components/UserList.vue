<template>
    <div>
        <ul>
            <li v-for="item in this.$store.state.itemList" :key="item.id" >
                {{item.item}}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default{
    data() {
        return {
           
        }
    },
    computed:{
      ...mapGetters({
        woodItems:"_woodItems",
        activeUser:"_activeUser"
      })
    }
}

</script>

<style l scoped>

</style>