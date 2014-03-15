Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    var post = {
      title: $('[name="title"]').val(),
      url: $('[name="url"]').val(),
      createdAt: Date.now(),
      userId: Meteor.userId(),
    };
    post._id = Posts.insert(post);
    if(post._id) {
      Router.go('/');
    } else {
      alert('Deu erro :(');
    }
  },
});
