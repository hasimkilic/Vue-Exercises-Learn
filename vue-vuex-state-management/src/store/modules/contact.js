export default {
    namespaced:true,// Bu şekilde isim karışıklığı önlemek için bu kodu yazıyoruz.
    state:{
        contactName:"puresol",
        contactAddress:"Kanada"
    },
    mutations:{
        setName(state,name){
            state.contactName = name;
        }
    },
    getters:{
        _contactName: state => state.contactName
    }
}