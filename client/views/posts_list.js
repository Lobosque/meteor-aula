var postsData = [
  {
    title: 'Goodbye Popcorn Time',
    url: 'https://medium.com/p/93f890b8c9f4',
    domain: 'medium.com',
  },
  {
    title: 'TunelBear vpn app',
    url: 'https://www.tunnelbear.com/',
    domain: 'tunnelbear.com',
  },
  {
    title: 'Update on Metro',
    url: 'https://blog.mozilla.org/futurereleases/2014/03/14/metro/',
    domain: 'blog.mozilla.org',
  },
];

Template.postsList.helpers({
  posts: postsData,
});
