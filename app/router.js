import EmberRouter from '@ember/routing/router';
import config from 'conan-ci/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('ecosystem', { path: '/:ecosystem_id' }, function() {
    this.route('settings', function() {
      this.route('profiles', function() {
        this.route('new');
        this.route('profile', { path: '/:profile_id' });
      });
      this.route('channels', function() {
        this.route('new');
        this.route('channel', { path: '/:channel_id' });
      });
      this.route('repos', function() {
        this.route('new');
        this.route('repo', { path: '/:repo_id' });
      });
    });
    this.route('builds', function() {
      this.route('build', { path: '/:build_id' });
    });
    this.route('repos', function() {
      this.route('repo', { path: '/:repo_id' });
    });
    this.route('recipes', function() {
      this.route('recipe', { path: '/:recipe_id' });
    });
  });
  this.route('new');
  this.route('login');
});
