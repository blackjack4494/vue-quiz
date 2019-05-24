<template>
  <div>
    <quizBuilder/>
  </div>
</template>

<script>
import quizBuilder from '@/components/quizBuilder.vue'
export default {
  name: "quiz",
  components: {
    quizBuilder
  },
  props: ["qID"]
}
</script>
