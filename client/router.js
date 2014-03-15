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
});

var loggedInOnly = function() {
  if(!Meteor.user()) {
    this.render('accessDenied');
    this.stop();
  }
}

Router.before(loggedInOnly, {only: ['postSubmit']});
