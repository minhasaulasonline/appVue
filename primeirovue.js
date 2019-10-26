 Vue.component("my-component", {
     template: `<li>{{valor}}</li>`,
     props: ['chave',
         'valor'
     ],
 })

 var app = new Vue({
     el: '#app1',
     data: {
         teste4: [
             { key: 0, value: "value1" },
             { key: 1, value: "value2" },
             { key: 2, value: "value3" },
             { key: 3, value: 'value4' }

         ],
         teste4b: [
             { key: 0, value: "Primeiro passo for criar um componete usando Vue.componente." },
             { key: 1, value: "Depois declaramos uma propriedade usando props:[ ]." },
             { key: 2, value: "No HTML chamamos a tag my-component, e usando o v-bind atribuimos valor as propriedades." },
             { key: 3, value: "NOTE que no meio da tag está um atributo do componente, que é modificado com o v-bind." }
         ],
         list: [
             'item1',
             'item2',
             'item3',
             'item4',
             'item5'
         ],

         text: 'trabalhando com filters',
         teste: true,
         teste2: true,
         teste3: "Escreva algo aqui!",

         myHtml: '<input type="Text"/>',
         numbers: 10,

     },
     filters: {
         myfilters: function(text, estado) {
             return estado ? text.replace(/[aeiou]/gi, '') : text;
         }

     },

     methods: {
         estado: function() { this.teste = !this.teste; },
         fteste2: function() { this.teste2 = !this.teste2; }
     }


 })