const app = Vue.createApp({
    data(){
        return{
            cart:0,
            selectedVariant:0,
            product:'Socks',
            brand:'Vue Mastery',
            description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni at exercitationem nemo placeat eos, officiis perferendis distinctio aspernatur sed fuga. Assumenda illum porro iusto nisi, quidem, veniam obcaecati earum vitae voluptates repudiandae voluptatem dolorem cum ea debitis! In libero rem dicta reprehenderit, ratione suscipit, explicabo eaque, assumenda eligendi expedita nostrum.",
            image:'./assets/img/fenerbahce-spor-kulubu-5-yildizli-arma.png',
            url:'https://hasimkilic.github.io',
            inStock:false,
            activeClass:true,
            inventory:8,
            details:['50% cotton','30% wool','20% polyester'],
            variants:[
                {
                    id:0,
                    color:'Blue',
                    star:5,
                    image:'./assets/img/fenerbahce-spor-kulubu-5-yildizli-arma.png',
                    quantity:50
                },
                {
                    id:1,
                    color:'Yellow',
                    star:3,
                    image:'./assets/img/fenerbahce-super-lig-takimi-logo-9.png',
                    quantity:0
                }
            ],
            sizes:['xs','s','m','l','xl'],
            styles:{
                color:'Blue',
                fontSize:'1rem',
                backgroundColor:'yellow',
                border:'1px solid #000'
            }
        }
    },
    methods:{
        addToCart(){
            //this.cart++;
            this.cart +=1;
        },
        updateImage(variantImage){
            variantImage = this.image;
        }
    },
    computed:{
        title(){
            return this.brand + ' ' + this.product
        }
    }
}).mount("#app") 


/*
v-on:click == tıklamamızı sağlar kısayolu şu şekilde ==  @click
v-on:mouseover == mouse ile üzerinde gezindiğimiz yeri belirtir. kısayolu şu şekildedir == @mouseover
v-bind:src == herhangi bir attirbute u dinamik js dosyasından çağırmamızı sağlar. kısa yolu şu şekilde == :src , :href , :alt vb.
v-for="{detail in details }" {detail} bu şekilde etiket içine yerleştirerek data dan aldığımız array i bu şekilde döndürürüz.== Örnek:' <li v-for="detail in details">{{detail}}</li>'
v-if ="" bu komut ile istersek içine koşul istersek koşulun adını yazarız.
v-else-if="" bu komut ile ikinci bi koşulu belitiriz.
v-else bu komut ilede kapatırız.
v-model=""
v-show=""

:style ile js dosyasından dinamik şekilde css değiştirebiliriz.
:class ile js dosyasından dinamik class a atama yapabiliriz.
:disabled ile devre dışı bırakma işlemşini yapabiliriz.

*/