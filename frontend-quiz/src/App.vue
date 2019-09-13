<template>
  <div id="app">
      <h1>Play Quiz</h1>
      <p>Your Score: {{Score}}</p>
      <p>{{questions.question}}</p>

      <div v-for="answer in questions.options">
        <input type="radio" v-model="Response" name="options" :value="answer.isCorrect" v-on:click="validate" :id="answer.id">{{answer.option}}<br/>
      </div>

      <button v-on:click="prev">Previous</button>
      <button v-on:click="next">Next</button><br><br>

        <span>{{Response}}</span>
  </div>
</template>

<script>
import VueResource from 'vue-resource'

export default {
  name: 'app',
  data(){
    return {
      datas: [],
      questions:[],
      index:0,
      Response:[],
      Score: 0
    }
  },
  created(){
      this.$http.get('http://localhost:8080/api/questions')
      .then(response=>{
        this.datas = response.body;
        this.questions = this.datas[this.index]
      })
  },
methods:{
  prev: function(){
    this.index--
  },

  next: function(){
    this.index++
  },
  validate: function (){
    console.log('Work')

      if(this.checkedNames == true){
      console.log('Correct')

      }else if(this.checkedNames == false){
      console.log('Correct')
      }
    }
  }
}
</script>

<style scoped>
#app h1{
  text-align: center
}
</style>
