Posts = new Meteor.Collection('posts');
Posts.allow({
  insert: function() {
    return !!this.userId;
  }
});
