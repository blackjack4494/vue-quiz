<template>
  <div>
    <div v-for="answer in question.choices" v-bind:key="answer" v-bind:item="answer">
      <input type="radio" v-bind:value="answer" v-model="testM">
      {{answer}}
    </div>
  </div>
</template>

<script>
export default {
  name: "qtype-single",
  data() {
    return {
      answer: ""
    };
  },
  props: ["question"],
  updated() {
    this.$emit("question-answered", this.answer);
  }
};
</script>