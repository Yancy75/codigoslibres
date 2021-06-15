const app = new Vue({
    el: '#app',
    data: {
        titulo:'Hola mundo en Vue',
        verduras:[
             {nombre:'papas', cantidad:10},
             {nombre:'zanaorias', cantidad:50},
             {nombre:'cebollas', cantidad:0},
             {nombre:'cebollones', cantidad:11},
             {nombre:'yuca', cantidad:5}
        ],
        paquete:''
    },
    methods:{
        agregarfruta(){
            alert(this.paquete);
            this.paquete.attr("disabled");
        }
    }

})