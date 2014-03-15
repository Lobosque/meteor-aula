Posts = new Meteor.Collection('posts');

Posts.allow({
  insert: function() {
    return !!this.userId;
  }
});

Meteor.methods({
  postSubmit: function(post) {
    post.createdAt = Date.now();
    post.userId = Meteor.userId();
    post._id = Posts.insert(post);
    return post._id;
  },
});
