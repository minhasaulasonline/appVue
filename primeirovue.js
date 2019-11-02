var comp2c = "fui criado no scopo global";

 Vue.directive('my-rotate', function(el) {
     var angle = 0;
     teste = false
     color = 'blue';
     el.addEventListener('click', function() {
         teste ? color = "blue" : color = "red";
         teste = !teste
         angle += 90;
         el.style.transform = ` rotateZ(${angle}deg) `;
         el.style.backgroundColor = color;
     })

 })

 Vue.component("my-component", {
     template: `<div>
              <slot>Padrão</slot>
              <li>{{valor}}</li>
                       
              </div>`,

     props: ['chave',
         'valor'
     ],
     data: function() {
         return {
             teste4b: [
                 { value: 'abacaxi' },
                 { value: 'banana' },
                 { value: 'coco' },
                 { value: 'damascom' }
             ]
         }
     }
 })

 Vue.component("my-comp2", {
     template: ` <div>
                   <slot v-bind:compText='comp2c'></slot>
                   <slot></slot>
                   <slot name='slot1'></slot>
                   <p>{{comp2a}}</p>
                   <p>{{comp2c}}</p>
                   <slot name='slot2'></slot>  
                   <slot  v-bind:comp3cb='comp3c'></slot>
                                          
                  </div>
            `,
     props: ['valor1'],

     data: function() {
         return {
             comp2a: "vim do componente, sou 2a",
             comp2b: "vim do component, sou 2b",
             comp2c: "sou do component, my name is 2c",
             comp3c: "sou do component, sou O 2C"

         }
     }
 })

 var app = new Vue({
     el: '#app1',
     data: {

         question: "",
         answer: " vamos la, pergunte algo? ",
         valor: 1,
         resultado: "ola",
         comp2a: "vim do elemento pai, sou 2a",
         comp2b: "vim do elemento pai, sou 2b",
         comp2c: "vim do elemento pai, sou 2c",
         comp3c: "vim do elemento pai, sou 2c",

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

     watch: {

         question: function() {

             this.answer = "estou pesquisando..."
             setTimeout(() => { this.answer = "isso eu nãoo sei" }, 2000)
         }
     },

     methods: {
         debounce: function(fn, delay) {
             timer = null
             return function(fn, delay) {
                 clearTimeout(timer);
                 setTimeout(fn, delay);
             }

         },

         result: function(n) {
             setTimeout(() => {
                 a = n + " " + "acrescimo"
                 alert(a);
             }, 1000);

         },
         estado: function() { this.teste = !this.teste; },
         fteste2: function() {
             this.teste2 = !this.teste2;

         },




     }


 })

 // usando o emit e os escutadores on e once, parece que sóe scutam os eventos emitidos pela função emmit

 app.$on('click', function() {
     return app.valor += 10
 })
