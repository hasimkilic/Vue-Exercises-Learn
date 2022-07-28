<template>
  <div class="container pt-3 text-center">
    <button class="btn btn-primary btn-sm float-right mb-2" @click="goToNewPerson" >+ Yeni ekle</button>
    <table class="table table-stripted table-bordered table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Başlık</th>
          <th scope="col">URL</th>
          <th scope="col">Açıklama</th>
          <th scope="col">Sil</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bookmark in this.bookmarkList" :key="bookmark.id">
          <th scope="row">{{bookmark.id}}</th>
          <td>{{bookmark.title}}</td>
          <td><a :href="bookmark.url" target="_blank">{{bookmark.url}}</a></td>
          <td>{{bookmark.description}}</td>
          <td>
            <button @click="deleteBookmark(bookmark)" class="btn btn-sm btn-danger">Sil</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      bookmarkList:[],
    }
  },
  methods: {
    goToNewPerson(){
      this.$router.push("/newPerson")
    },
    deleteBookmark(bookmark){
      this.$axios(`http://localhost:3000/bookmarks/${bookmark.id}`).then(delete_response =>{
        if(delete_response.status === 200){
          this.bookmarkList = this.bookmarkList.filter(b => b.id !== bookmark.id)
        }
      });
    }
  },
  created() {
    this.$axios.get("http://localhost:3000/bookmarks")
    .then(bookmark_list_res =>{
    this.bookmarkList = bookmark_list_res.data || [];
    })
  },

}
</script>
