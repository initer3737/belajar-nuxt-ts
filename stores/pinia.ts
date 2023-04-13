import { defineStore } from "pinia";
import { reactive,computed,ref } from "vue";

export const pinia=defineStore('pinia',()=>{
    //ref adalah sebuah state reactive bagi type data non object
        const point=ref(1)
                //reactive adalah sebuah state reactive bagi type data non primitive
        const datas=reactive({
            name:'harvey bernandes el ponto',
            age:new Date().getFullYear() - 1920,
            hobby:'ternak uang dan menjadi kapitalis'
        })

        const getName=computed(()=>datas.name)
        const getAge=computed(()=>datas.age)
        const getHobby=computed(()=>datas.hobby)
        const getPoint=computed(()=>point.value)
        return {
            getName,getAge,getHobby,getPoint
        }
})