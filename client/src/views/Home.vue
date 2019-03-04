<template>
  <div>
    <button>Click mich!</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  methods: {
    createQuiz() {
      let qID = 'r_' + Math.random().toString(36).substr(2, 9);
      this.$router.push({name: 'quiz', params: {qID: qID}});
    } 
  }
}
</script>
