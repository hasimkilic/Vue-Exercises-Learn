<template>
  <nav class="container d-flex align-items-center justify-content-center text-center ">
    <router-link to="/" class="nav-link" active-class="active">Home</router-link> 
    <router-link to="/about" class="nav-link" active-class="active">About</router-link> 
    <router-link to="/contact" class="nav-link" active-class="active">Details</router-link>
  </nav>
  <router-view/>
</template>

<style>
.nav-link{
  border: 1px solid #003b64;
  border-radius: 4px;
  padding: 5px;
  color: #000;
  text-decoration: none;
  margin: 0 8px;
  
}
.active{
  border: 1px solid #fff;
  background-color: #003b64;
  color:#fff
}

</style>