<template>
  <div>
     Choose true or false:
          <br>
          <input type="radio" value="true" v-model="lanswer">true
          <br>
          <input type="radio" value="false" v-model="lanswer">false
  </div>
</template>

<script>
export default {
  name: "qtype-single",
  data() {
    return {
      lanswer: ""
    };
  },
  props: ['question'],
  updated() {
    this.$emit("question-answered", this.lanswer);
  }
};
</script>