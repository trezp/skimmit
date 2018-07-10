const phaseOne = new Vue({
  el: '#app',
  data: {
    post: {
      title: 'Really Important News', 
      summary: 'This is a summary of what the post is about.',
      thumbnail: 'https://placeimg.com/75/75/any',
      alt: 'Thumbnail of image',
      votes: 0,
    },
  },
  methods: {
    increment(){
      this.post.votes += 1;
    },
    decrement(){
      this.post.votes -= 1;
    }
  }
});

//PHASE ONE
// 1. Create a new Vue instance with the necessary options
// 2. Create a data property called "post". "post" should be an object with the following
// properties: title, summary, thumbnail and votes
// 3. Make up data for each property. The value of "votes" should be zero
// 4. Display the post's vote count, image thumbnail, alt text, title, and summary in the Vue template
// 5. Create a method called "increment" that adds 1 vote to "votes"
// 6. Create a method called "decrement" that substracts 1 vote from "votes"
// 7. Add the methods to the span elements with the div with a id of "voteCounter"

//PHASE TWO
