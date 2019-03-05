<template>
  <div>
    <!--<p>{{qID}}</p>-->
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
