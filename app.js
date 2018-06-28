const phaseOne = new Vue({
  el: '#app',
  data: {
    post: {
      title: 'Really Important News', 
      post: 'This is a summary of what the post is about.',
      thumbnail: 'https://placeimg.com/75/75/any',
      votes: 6,
    },
  },
  methods: {
    increment(){
      this.post.votes = this.post.votes + 1;
    },
    decrement(){
      this.post.votes = this.post.votes - 1;
    }
  },
  computed: {
    submitted: function(){
      const date = new Date(); 
      return date;
    }
  }
});
