<template>
  <div id="app">
<h1>Home Works</h1>
 </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  created(){
    this.$http.get('localhost:3000/api/questions/')
      .then(function(data){
        console.log(data)
    })
  }
}
</script>

<style scoped>
#app{
  text-align: center
}
</style>
