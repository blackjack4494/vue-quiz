
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
        <div v-if="question.type === 'number'">
          Put a number here:
          <input type="text" placeholder="put a number here" v-model="testM">
        </div>
        <div v-if="question.type === 'single'">
          <div v-for="answer in question.choices" v-bind:key="answer" v-bind:item="answer">
            <input type="radio" v-bind:value="answer" v-model="testM">
            {{answer}}
          </div>
        </div>
        <div v-if="question.type === 'multiple'">
          <div v-for="answer in question.choices" v-bind:key="answer" v-bind:item="answer">
            <input type="checkbox" v-bind:value="answer" v-model="test">
            {{answer}}
          </div>
        </div>
        <div v-if="question.type === 'boolean'">
          Choose true or false:
          <br>
          <input type="radio" value="true" v-model="testM">true
          <br>
          <input type="radio" value="false" v-model="testM">false
        </div>
        <!--v-on:click="acknowledgeAnswer(answer)-->
        <button v-if="questionIndex > 0" v-on:click="back">go back</button>
        <button
          v-if="questionIndex < quizJson.questions.length - 1"
          v-on:click="acknowledgeAnswer"
        >next</button>
        <button
          v-if="questionIndex === quizJson.questions.length - 1"
          v-on:click="acknowledgeAnswer"
        >next</button>
      </div>
    </div>
    <div v-show="questionIndex === quizJson.questions.length">
      Well done.
      <button
        v-if="questionIndex === quizJson.questions.length"
        v-on:click="calculateScore()"
      >calc</button>
    </div>
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
      quizJson: example,
      qAnswers: [],
      results: [],
      test: [],
      testM: ""
    };
  },
  methods: {
    next: function() {
      this.questionIndex++;
    },
    back: function() {
      this.questionIndex--;
    },
    acknowledgeAnswer: function() {
      if (this.test.length > 0) {
        this.qAnswers[this.questionIndex] = this.test;
        this.test = [];
      } else {
        this.qAnswers[this.questionIndex] = [this.testM];
        this.testM = "";
      }
      this.next();
    },
    calculateScore: function() {
      this.quizJson.questions.forEach((el, index) => {
        this.results[index] = false;
        console.log("qan-length " + this.qAnswers[index].length)
        if (this.qAnswers[index].length === el.answers.length) {
          if (this.qAnswers[index].length === 1 && el.answers.length === 1) {
            if (this.compareQNA(this.qAnswers[index], el.answers)) {
              this.results[index] = true;
            }
          }
          if (this.qAnswers[index].length === 0 && el.answers.length === 0) {
            this.results[index] = true;
          }
          if (this.qAnswers[index].length > 1) {
            if (this.compareMultiple(this.qAnswers[index], el.answers)) {
              this.results[index] = true;
            }
          }
        }
      });
      this.qAnswers.forEach((el, index) => {
        console.log("q" + index + " " + el);
      });
      this.quizJson.questions.forEach((el, index) => {
        console.log("c" + index + " " + el.answers);
      });
      this.results.forEach((el, index) => {
        console.log("r" + index + " " + el);
      });
    },
    compareQNA: function(pqAnswer, aAnswer) {
      return pqAnswer[0] === aAnswer[0] ? true : false;
    },
    compareMultiple: function(arr1, arr2) {
      var hArray = [...new Set([...arr1, ...arr2])];
      console.log(hArray);
      return hArray.length === arr2.length ? true : false;
    }
  },
  mounted() {
    //debugger
  }
};
</script>