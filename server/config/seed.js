/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');


Thing.find({}).remove(function initItems () {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  },{
    name : 'Deployment Ready1',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
    },{
    name : 'Deployment Ready2',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
    },{
    name : 'Deployment Ready3',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  },{
    name : 'Deployment Ready4',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  },{
    name : 'Deployment Ready5',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  },{
    name : 'Deployment Ready6',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  },{
    name : 'Deployment Ready7',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  },{
    name : 'Deployment Ready8',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  },{
    name : 'Deployment Ready9',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  },{
    name : 'Deployment Ready10',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  },{
    name : 'Deployment Ready11',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  },{
    name : 'Deployment Ready12',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});
