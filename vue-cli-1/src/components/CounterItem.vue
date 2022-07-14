<script>
export default  {
    data(){
        return{
            counter:0,
        };
    },
}
</script>


<template>
    <div>
    <div class="container ">
        <div class="row ">
            <div class=" card ">
                <h3>{{counter}}</h3>
                <button @click="counter--" class="btn btn-danger">-</button>
                <button @click="counter++" class="btn btn-success">+</button>
            </div>
        </div>
    </div>
</div>
</template>

<style>
.container{
    border: 3px solid #ddd;
    width: 300px;
    height: 200px;
    margin: 1rem auto;
    padding: 1rem;
}
.row{
    text-align: center;
}
.btn{
    border: 1px solid #000;
    height: 25px;
    width: 50px;
    border-radius: 4px;
    
}
.btn-danger{
    color:white;
    background-color: red;
}
.btn-success{
    color:white;
    background-color: green;
}
</style>
