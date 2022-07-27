import { createStore } from 'vuex'
import contact from './modules/contact';
import taskManager from './modules/taskManager';
export default createStore({
  namespaced:true,
  //Burada state içerisinde bilgileri tutuyoruz.
  state: {
    user:{
      name:"Haşim",
      numbers: [1,2,3,4],
      password:121212122,
      tckno:121653153
    },
    userList:["Haşim","Anıl","Beyza","Enes"],
    fullName:"Haşim Kılıç",
    itemList :[
      {id:1, item:"Telefon", type:"Elektronik"},
      {id:2, item:"Bilgisayar", type:"Elektronik"},
      {id:3, item:"Masa", type:"mobilya"},
      {id:4, item:"Sandalye", type:"mobilya"},
      {id:5, item:"Mönitor", type:"Elektronik"},
    ]
  },
  //Değişken gibi kullanılır geriye değer döndürür.
  //Belirli standartlarda değiştirmek için burayı kullanıyoruz. stateteki bilgileri bize geri döndürür.
  // Bu şekilde veriyi manipüle ediyoruz.
  //getter olduğunu belli etmek için _ işaretini kullan
  getters: {
    _woodItems : state => state.itemList.filter(i => i.type === "mobilya"),
    _activeUser(state){
      const user = {
        ...state.user
    };
    // bu şekilde veriyi silerek localde görünmemesini backende veri gitmemesini sağlıyoruz..
    delete user.password;
    delete user.tckno;
    return user 
    },
  },
  //State i anlık olarak  güncellemek için burayı kullanırız.
  //Senkron olarak çalışır.
  mutations: { //payload giden bilgi kargo anlamında
    newItem(state,item){
      state.itemList.push(item);
    }
  },
  //Asenkron işlemler için bu actions kısmı kullanılır. aynı mutations işlemini görür.
  //actions işlemleri dispatch komutunu kullanarak çağırırız. Mutations ise commit() komutunu kullanarak çağırırız.
  actions: {
    //commit , state , dispatch komutunu aşağıdaki gibi kullanyoruzç {} içine yazmamız lazım çünkü bunlar bi obje
    newItem({commit},item){
      setTimeout(()=>{
        commit("newItem",item)
      },2000)// 2sn sonra asenkron olarak veri ekleriz.
    }
  },
  //Bu şekilde modülleri çağırıyoruz ve buraya yazıyoruz.
  modules: {
    musteri:contact,//Bu şekilde modulün ismini değiştirebiliyoruz.
    taskManager
  }
})
