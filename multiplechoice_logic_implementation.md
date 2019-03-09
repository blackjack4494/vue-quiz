What is the best way to check the right answers for a multiple choice test, where more or less than one answer can be correct.  


### Currently implemented:  
- Combine correct answers and user anwers as one array.   
- Then use set function https://github.com/blackjack4494/vue-quiz/blob/dev/client/src/components/quizBuilder.vue#L97-L101
- Lastly compare if that new array is empty since our function would return an empty array if the answers are correct due to the set function (removing same variables)  

This quick calculating would just return true or false meaning we just get the conclusion if a question is answered correctly.  
Tho this is all done after all questions are answered.

### Alternative One:
- create an empty array of the length of the possible answers of a question - this array will contain true or false
- create a function which will update the answer selection into that array after each question
- so if a question is answered correctly all fields of the array should return true
  - if a ticked answer is correct it's true - if the uncorrect answers aren't ticked it's true 
  - if an uncorrect answer is ticked it's false - if an answer is not ticked it's false
  - so you can check the array of a question for false fields since false means the user was wrong

Downside could be that you are able to manipulate the tf-array
