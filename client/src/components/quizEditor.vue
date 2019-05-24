<template>
  <div>
    <div v-if="stage == 'meta'">
      Title:
      <input type="text" placeholder="Title" v-model="quiz.title">
      <p>{{quiz.title}}</p>
      Category:
      <input type="text" placeholder="Category" v-model="quiz.category">
      Author:
      <input type="text" placeholder="Author" v-model="quiz.author">
    </div>
    <div v-if="stage == 'question'">
      Question:
      <input type="text" placeholder="Question" v-model="tquest.text">
      Type:
      <select v-model="tquest.type">
          <option v-for="option in types" :value="option" :key="option.id">{{ option }}</option>
      </select>
      Question:
      <input type="text" placeholder="Question" v-model="tquest.text">
      <br>
      <button v-on:click="single.push(true)">Add single question</button>
      <div v-for="question in single" v-bind:key="question" v-bind:item="question">
        
      </div>
    </div>
  </div>
</template>

<script>
//https://stackoverflow.com/questions/48611671/vue-js-write-json-object-to-local-file
export default {
  name: "quizEditor",
  data() {
    return {
        stage: "question",
        types: ["number", "single", "multiple", "boolean"],
        tquest: {
            text: "",
            type: "",
            choices: [],
            answers: []
        },
        single : [],
        quiz: {
        title: "",
        category: "",
        sub_category: "",
        difficulty_level: "",
        author: "",
        creation_date: "",
        revision: "",
        questions: []
      }
    };
  }
};
</script>