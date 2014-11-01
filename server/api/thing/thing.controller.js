/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var validator = require('validator');

var Thing = require('./thing.model');



// Get list of things
exports.index = function(req, res) {
  Thing.find(function (err, things) {
    if(err) { return handleError(res, err); }

    var page = req.query.page ? validator.toInt(req.query.page) : 0;
    var nextPage = page + 1;
    var previousPage = page > 0 ? page - 1 : 0;
    var per_page = req.query.per_page ? validator.toInt(req.query.per_page) : 5;
    var start = page * per_page;

    function addLinks(data) {
        return {
            href: 'http://localhost:9000/api/things?page=0&per_page=3',
            next: {
                href: 'http://localhost:9000/api/things?page=' + nextPage + '&per_page=' + per_page,
            },
            previous: {
                href: 'http://localhost:9000/api/things?page=' + previousPage + '&per_page=' + per_page,
            },
            items: data
        }
    }

    if (_.isNumber(page) && _.isNumber(per_page)) {
        things = things.slice(start, start + per_page);
    }

    return res.json(200, addLinks(things));
  });
};

// Get a single thing
exports.show = function(req, res) {
  Thing.findById(req.params.id, function (err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    return res.json(thing);
  });
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
  Thing.create(req.body, function(err, thing) {
    if(err) { return handleError(res, err); }
    return res.json(201, thing);
  });
};

// Updates an existing thing in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Thing.findById(req.params.id, function (err, thing) {
    if (err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    var updated = _.merge(thing, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, thing);
    });
  });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
  Thing.findById(req.params.id, function (err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    thing.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
