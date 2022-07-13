const app = Vue.createApp({
    data(){
        return {
            search:'',
            itemList : ['elma','armut','kiraz','çilek','leylek'],
            // filteredList : [],
        };
    },
    methods: {
        searchList(){
            // this.filteredList = this.itemList.filter((i) => i.includes(this.search))
        }   
    },
    //Değiştiğinde render etmek için computed içerisinde yaptık doğru kullanımı bu şekildedir.
    // Computed içerisinde değişken gibi tanımlayıp render ederek kullanırız.
    computed :{
        filteredList(){
            return this.itemList.filter((i) => i.includes(this.search))
        }
         
    }

}).mount('#app');