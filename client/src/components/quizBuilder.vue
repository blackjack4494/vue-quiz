
<template>
<div>
  <p>{{quizJson.title}}</p>
  <div v-for="data in quizJson" v-bind:key="data.title">title:{{ data.title }}</div>
  <div v-for="data in quizJson"
  v-bind:key="data.title">
    <p>Titel:{{data.title}}</p>
  </div>
</div>
</template>

<script>
//import { json } from 'body-parser';
import example from '@/example_quiz.json'
// @ is an alias to /src
export default {
  name: 'home',
  data(){
    return{
      quizJson: JSON.parse(example)
    }
  },
  mounted() {
    let obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
    console.log(obj)
    console.log(this.quizJson);
  },
}
</script>