Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    var post = {
      title: $('[name="title"]').val(),
      url: $('[name="url"]').val(),
    };
    Meteor.call('postSubmit', post, function(error, id) {
      post._id = id;
      if(post._id) {
        Router.go('/');
      } else {
        alert('Deu erro :(');
      }
    });
  },
});
