<template>
  <div>
    Put a number here:<input type="text" placeholder="put a number here" v-model="answer">
  </div>
</template>

<script>
export default {
  name: "qtype-number",
  data() {
    return {
      answer: ""
    };
  },
  props: ['question'],
  updated() {
    this.$emit('question-answered', this.answer)
  }
};
</script>