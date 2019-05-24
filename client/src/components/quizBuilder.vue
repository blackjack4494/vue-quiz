
<template>
  <div>
    <div v-if="quizJson === null">
      <p>Fetching Json data...</p>
    </div>
    <div v-else>
    <p>Title: {{quizJson.title}}</p>
    <p>Author: {{quizJson.author}}</p>
    <div
      v-for="(question, index) in quizJson.questions"
      v-bind:item="question"
      v-bind:key="question[index]"
    >
      <div v-show="index === questionIndex">
        <p>Question: {{question.text}}</p>
        <div v-if="question.type === 'number'">
          <number :question="question" v-on:question-answered="testM = $event"/>
        </div>
        <div v-if="question.type === 'single'">
          <single :question="question" v-on:question-answered="testM = $event" />
        </div>
        <div v-if="question.type === 'multiple'">
          <multiple :question="question" v-on:question-answered="test = $event" />
        </div>
        <div v-if="question.type === 'boolean'">
          <boolean :question="question" v-on:question-answered="testM = $event" />
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
  </div>
</template>

<script>
//import { json } from 'body-parser';
import example from "@/example_quiz.json";
import number from '@/components/subcomponents/qtype-number.vue';
import single from '@/components/subcomponents/qtype-single.vue';
import multiple from '@/components/subcomponents/qtype-multiple.vue';
import boolean from '@/components/subcomponents/qtype-boolean.vue';
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {
      questionIndex: 0,
      //quizJson: null,
      quizJsonz: example,
      qAnswers: [],
      results: [],
      test: [],
      testM: ""
    };
  },
  components: {
    number,
    single,
    multiple,
    boolean
  },
  computed: {
    quizJson: function () {
      //console.log('computed')
      return this.quizJsonz
    }
  },
  methods: {
    fetchData() {
      const myRequest = new Request('https://raw.githubusercontent.com/blackjack4494/vue-quiz/master/example_quiz.json')

      fetch(myRequest)
        .then((response) => { return response.json() })
        .then((data) => {
          this.quizJsonz = data
          console.log(this.quizJsonz)
        }).catch( error => { console.log(error); });
    },
    next() {
      this.questionIndex+=1;
    },
    back() {
      this.questionIndex-=1;
    },
    acknowledgeAnswer() {
      if (this.test.length > 0) {
        this.qAnswers[this.questionIndex] = this.test;
        this.test = [];
      } else {
        this.qAnswers[this.questionIndex] = [this.testM];
        this.testM = "";
      }
      this.next();
    },
    calculateScore() {
      this.quizJson.questions.forEach((el, index) => {
        this.results[index] = false;
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
    compareQNA: (pqAnswer, aAnswer) => {
      return pqAnswer[0] === aAnswer[0] ? true : false;
    },
    compareMultiple: (arr1, arr2) => {
      let hArray = [...new Set([...arr1, ...arr2])];
      console.log(hArray);
      return hArray.length === arr2.length ? true : false;
    }
  },
  mounted() {
    //debugger
    this.fetchData()
  }
};
</script>