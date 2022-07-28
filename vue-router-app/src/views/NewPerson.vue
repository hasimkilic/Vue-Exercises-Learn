<template>
  <div class="container border card mt-4 newPerson">
<form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Başlık</label>
    <input type="text" v-model="userData.title" class="form-control" id="title" placeholder="Başlığın ismini giriniz..">
  </div>
  <div class="form-group ">
    <label for="exampleFormControlInput1">Url</label>
    <input type="text" v-model="userData.url" class="form-control" id="url" placeholder="Bağlantı adresini giriniz..">
  </div>  
  <div class="form-group">
    <label for="description">Açıklama</label>
    <textarea class="form-control" v-model="userData.description" id="description" rows="3" placeholder="Lütfen açıklama giriniz.."></textarea>
  </div>
</form> 
<div class="d-flex justify-content-end align-items-center mr-2 mb-2" >
  <button class="btn btn-danger btn-sm  mt-2 mr-2" @click="goBackHome" >İptal</button>
  <button class="btn btn-primary btn-sm  mt-2" @click="onSave" >Kaydet</button>  
</div>
  </div>
</template>

<script>
export default{
  name:"NewPerson",
  data() {
    return {
      userData:{
        title:null,
        url:null,
        description:null
      }
    }
  },
  methods: {
    goBackHome(){
      this.$router.push("/")
    },
    onSave(){
      this.$axios.post("http://localhost:3000/bookmarks",this.userData).then(save_response =>{
        console.log("save_response",save_response);
        this.resetData();
        this.$router.push("/")
      })
    },
    resetData(){
      Object.keys(this.userData).forEach(key => (this.userData[key] = null));
    }
  },
}

</script>
