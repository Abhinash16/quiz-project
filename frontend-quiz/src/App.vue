<template>
  <div id="app">
    <div class="container-fluid text-center">
      <h1>PlayQuiz.com</h1>
    </div>
    <div  v-show="startQuiz" class="container-fluid text-center">
     <p> Welcome!!</p>
        <button v-on:click="start" class="btn btn-primary">Let's get started!!</button><br><br>
    </div>

<div v-if="showQuestion && currentQuestion < questions.length - 1" class="container-fluid">
  <p id="question">Q{{currentQuestion + 1}} {{questions[currentQuestion].question}}</p>
  <div v-for="answer in questions[currentQuestion].options">
     <div class="radio">
      <input type="radio" v-model="Response" name="options" :value="answer.isCorrect" v-on:click="next" :id="answer.id">
      {{answer.option}}
    </div>
  </div>
</div>

<div v-show="show" class="container text-center">
  <div v-show="Score < 5">
    <p>Better Luck Next Time!!</p>
    <p>Your Score : {{Score}}</p>
  </div>
  <div v-show="Score > 5 ">
  <p>Tada you are a Champion!!</p>
  <p>Your Score : {{Score}}</p>
</div>
</div>
</div>

</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  data(){
    return {
      datas: [],
      currentQuestion:0,
      Response:[],
      Score: 0,
      startQuiz: false,
      showQuestion:false,
      showResult:false,
      show:false
    }
  },
  computed: mapGetters({
    questions: 'getAllQuestions',
    getQuestion: 'getAQuestion'
  }),
  created(){
      //this.$store.dispatch('storeQuestions')
  },
  beforeMount() {
    this.$http.get('http://localhost:8080/api/questions')
      .then(response=>{
        this.$store.dispatch('putQuestions', response.data)
        this.startQuiz = true;
      })
  },
methods:{
  start: function(){
    this.startQuiz = false;
    this.showQuestion = true;
    console.log(this.getQuestion(3))
  },

  prev: function(){
    this.currentQuestion--
  },

  next: function(){

    if(this.response == true){
      this.Score = this.Score + 3
    }else{
      this.Score = this.Score -1
    }
    this.currentQuestion++
    if(this.currentQuestion == this.datas.length - 1){
      this.show = true;
    }

  },
  }
}
</script>

<style scoped>
#question{
 text-align: center;
 padding:5px 5px 5px 5px;
}
.radio{
  padding: 5px 5px 5px 450px;
}
</style>
