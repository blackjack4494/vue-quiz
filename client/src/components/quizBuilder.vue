
<template>
  <div>
    <p>Title: {{quizJson.title}}</p>
    <p>Author: {{quizJson.author}}</p>
    <!--<p>Question: {{quizJson.questions[0]}}</p>
    v-on:click="index += 1"-->
    <div
      v-for="(question, index) in quizJson.questions"
      v-bind:item="question"
      v-bind:key="question[index]"
    >
      <div v-show="index === questionIndex">
        <p>Question:{{ question.text }}</p>
        <div v-if="question.type === 'number'">Put a number here:
          <input type="text" placeholder="put a number here">
        </div>
        <div v-if="question.type === 'single'">
          <div v-for="answer in question.choices" v-bind:key="answer" v-bind:item="answer">
            <input type="radio">
            {{answer}}
          </div>
        </div>
        <div v-if="question.type === 'multiple'">
          <div v-for="answer in question.choices" v-bind:key="answer" v-bind:item="answer">
            <input type="checkbox">
            {{answer}}
          </div>
        </div>
        <div v-if="question.type === 'boolean'">Choose true or false:
          <br>
          <input type="radio" value="true">true
          <br>
          <input type="radio" value="false">false
        </div>
        <button v-if="questionIndex > 0" v-on:click="back">go back</button>
        <button v-if="questionIndex < quizJson.questions.length - 1" v-on:click="next">next</button>
        <button v-if="questionIndex === quizJson.questions.length - 1" v-on:click="next">show score</button>
      </div>
    </div>
    <div v-show="questionIndex === quizJson.questions.length">Well done.</div>
  </div>
</template>

<script>
//import { json } from 'body-parser';
import example from "@/example_quiz.json";
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {
      questionIndex: 0,
      quizJson: example
    };
  },
  methods: {
      next: function() {
        this.questionIndex++;
      },
      back: function() {
        this.questionIndex--;
      }
  },
  mounted() {
    //debugger
  }
};
</script>