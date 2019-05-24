<template>
  <div>
    <div v-for="answer in question.choices" v-bind:key="answer" v-bind:item="answer">
      <input type="checkbox" v-bind:value="answer" v-model="test">
      {{answer}}
    </div>
  </div>
</template>

<script>
export default {
  name: "qtype-multiple",
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