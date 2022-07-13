const app = Vue.createApp({
    data(){
        return{
            todoList: [
                {
                    id:1,
                    text:'Görev 1',
                    completed:false,
                },
                {
                    id:2,
                    text:'Görev 2',
                    completed:false,
                },
                {
                    id:3,
                    text:'Görev 3',
                    completed:false,
                },
                {
                    id:4,
                    text:'Görev 4',
                    completed:false,
                },
                {
                    id:5,
                    text:'Görev 5',
                    completed:false,
                },
            ]
        }
    },
    methods:{
        addTodo(event){
            console.log(event.target.value),
            this.todoList.push({
                id:new Date().getTime(),
                text:event.target.value,
                completed:false,
            });
            event.target.value= "";
        },
        removeItem(todoItem){
            this.todoList = this.todoList.filter(todo => todo!==todoItem)
        },
    },
    computed:{
        completedItemCount(){
            return this.todoList.filter(t => t.completed).length;
        },
        unCompletedItemCount(){
            return this.todoList.filter(t => !t.completed).length;
        },
    }
}).mount('#app')