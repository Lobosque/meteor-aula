Meteor.publish('posts', function(number) {
  return Posts.find();
});
