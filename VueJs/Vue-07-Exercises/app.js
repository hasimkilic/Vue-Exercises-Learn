const app = Vue.createApp({
    data(){
        return{
            title:'Hello VueJs',
            hobbies:['Hello','VueJs'],
            details:`<a href="https://www.google.com/search?client=opera-gx&q=google&sourceid=opera&ie=UTF-8&oe=UTF-8" target="_blank">Buraya Tıklayınız...</a>`,
            url:'https://www.google.com/search?client=opera-gx&q=google&sourceid=opera&ie=UTF-8&oe=UTF-8',
            masa:'masa',
            coordX:0,
            coordY:0,
            showState: false,
            counter: 0,
            persons: [
                { id: 1, name: "Cihan Özen" },
                { id: 2, name: "Ramazan Sancar" },
                { id: 3, name: "Enes Taha Sarı" },
                { id: 4, name: "Gökhan Kandemir" },
                { id: 5, name: "Defne Kandemir" },
                { id: 6, name: "Beek X (Berk)" },
                { id: 7, name: "Asy" },
                { id: 8, name: "Onur Şen" },
                { id: 9, name: "Emirhan Çifci" },
                { id: 10, name: "Tamer Karalürt" },
              ],
        }
    },
    methods:{
        updateTitle(){
            this.title = 'Hello Javascript'
        },
        updateCoords(e){
            this.coordX = e.offsetX;
            this.coordY = e.offsetY;
            this.updateTitle(`${this.coordX},${this.coordY}`)
        }
    }
}).mount('#app');