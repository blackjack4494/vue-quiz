<template>
  <div>
      <div>
        <p>Single question</p>
        Option:<input type="text" placeholder="Answer" v-model="choices[0]"><br>
        Option:<input type="text" placeholder="Answer" v-model="choices[1]"><br>
        <button v-on:click="choices.push(true)">Add option</button>
        <div v-for="(choice, index) in choices" v-bind:key="choice.id" v-bind:item="choice">
            Option:<input type="text" placeholder="Answer" v-model="number.text">
            <button v-on:click="choices.splice(index, 1)">Delete</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "etype-number",
  data() {
    return {
        choices : ["la", "li"],
        number: {
            text: "",
            type: "number",
            choices: []
      }
    };
  },
  updated() {
    this.$emit('question-filled', this.number)
  }
};
</script>