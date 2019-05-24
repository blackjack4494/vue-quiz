<template>
  <div>
    <button v-if="stage == 'meta'" v-on:click="next">next</button>
    <button v-if="stage == 'question'" v-on:click="back">back</button>
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
          <!--<option disabled value="">Type</option>-->
          <option v-for="option in types" :value="option" :key="option.id">{{ option }}</option>
      </select>
      Question:
      <input type="text" placeholder="Question" v-model="tquest.text">
      <br>
      <!--<button v-on:click="single.push(counter++)">Add single question</button>-->
      <div v-for="(question, index) in single" v-bind:key="index" v-bind:item="question">
        <number v-on:question-filled="question = $event"/>
        <p>{{question}}</p>
        <button v-on:click="single.splice(index, 1)">Delete</button>
      </div>
      <button v-on:click="printS">Print</button>
    </div>
  </div>
</template>

<script>
//https://stackoverflow.com/questions/48611671/vue-js-write-json-object-to-local-file
import number from '@/components/subcomponents/etype-number.vue';
export default {
  name: "quizEditor",
   components: {
    number,
  },
  data() {
    return {
        counter: 0,
        stage: "meta",
        types: ["number", "single", "multiple", "boolean"],
        tquest: {
            text: "",
            type: "",
            choices: [],
            answers: []
        },
        single : ["la","li","lu"],
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
  },
  methods: {
    next() {
      this.stage="question";
    },
    back() {
      this.stage="meta";
    },
    printS(){
      console.log(this.single)
    }
  }
};
</script>