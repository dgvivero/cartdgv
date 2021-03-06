import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('products', function(){
    this.route('product', { path: '/:id'});
    this.route('products', { path: '/'});
  });
});

export default Router;