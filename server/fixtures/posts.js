Meteor.startup(function() {
  var postsData = [
    {
      title: 'Goodbye Popcorn Time',
      url: 'https://medium.com/p/93f890b8c9f4',
    },
    {
      title: 'TunelBear vpn app',
      url: 'https://www.tunnelbear.com/',
    },
    {
      title: 'Update on Metro',
      url: 'https://blog.mozilla.org/futurereleases/2014/03/14/metro/',
    },
  ];
  if(Posts.find().count() == 0) {
    _.each(postsData, function(post) {
      Posts.insert(post);
    });
  }
});
