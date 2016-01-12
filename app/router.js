import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //These are just standard routes.
  this.route('about');
  this.route('services');
  this.route('contact');

  /*This creates a route for posts and looks at the posts folder
  in templates/posts/ and looks for the index.hbs file.  After that
  it looks for the inner-route of "new".  It will also look for anything
  that is listed after /posts that isn't /new.  Ex. /posts/1 */

  this.resource('posts', {path: '/posts'}, function(){
      this.route('new');
      this.route('post', {path: ':post_id'});
  });
});

export default Router;
