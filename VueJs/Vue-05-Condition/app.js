const app = Vue.createApp({
    data(){
        return{
            count:0,
            showContainer:false,
        }
    },
    computed: {
        countBoxClasses(){
            return{
            'bg-success': this.count > 0,
            'bg-danger text-white': this.count < 0}
        }
    }
}).mount('#app')