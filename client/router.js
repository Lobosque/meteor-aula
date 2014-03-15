Router.configure({
  layoutTemplate: 'layout',
});

Router.map(function() {
  this.route('postsList', {
    path: '/',
  });
  this.route('postSubmit', {
    path: 'submit',
  });
  this.route('postView', {
    path: 'view/:_id',
    data: function() {
      return Posts.findOne({_id: this.params._id});
    }
  });
});

var loggedInOnly = function() {
  if(!Meteor.user()) {
    this.render('accessDenied');
    this.stop();
  }
}

Router.before(loggedInOnly, {only: ['postSubmit']});
