<script>
definePageMeta({
        middleware:'auth'
    })
    let formTodo={
        todo:[
            'makan mie ayam pake es jeruk',
            'nonton anime kimetsu no yaiba s3 desa penempa pedang',
            'menunggu mbak siesta dari anime tantei wa mou shindeiru menjadi nyata',
        ]
    }
export default {
        data(){
            return{
                todos:formTodo,
                input:'',
                inputNull:''
            }
        },
        methods:{
            submit(){
                if(this.input.trim().length>0){
                    this.todos.todo=[...this.todos.todo,this.input]    
                    this.input=''
                }
            } 
        }
    }
</script>
<template>
    i am about page!
    <p> {{ priceFormatter(12000) }}</p>
    <h3 class="text-center">todo list</h3>
    <ul class="flex gap-2 flex-col">
        <li v-for="data in todos.todo">
            {{data}}
        </li>
        <li><input type="text" v-model="input" placeholder="todo list" class="outline-0 bg-transparent border-b-2 border-[dodgerblue]"></li>
        <li><button @click="submit()" class="border-b-2 px-2 hover:border-blue-900 transition-all duration-600">kirim</button></li>
    </ul>
</template>