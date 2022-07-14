const app = Vue.createApp({
    data(){
        return{
            
        }
    },
    methods: {
        
    },
    computed:{

    }
});

app.component("counter-item",{
    data(){
        return{
            counter:0,
        }
    },
    template:
        `
    <div class="container mt-4 ">
        <div class="row ">
            <div class=" card col-6 text-center">
                <h3>{{counter}}</h3>
                <button @click="counter--" class="btn btn-sm btn-danger">-</button>
                <button @click="counter++" class="btn btn-sm btn-success">+</button>
            </div>
        </div>
    </div>
        `
    
});

app.mount('#app')