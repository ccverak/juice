 'use strict';

 /**
  * Module dependencies.
  */

 var utils = require('./lib/utils');
 var packageJson = require('./package');
 var fs = require('fs');
 var path = require('path');
 //var inline = require('web-resource-inliner');
 var juiceClient = require('./client');
 var cheerio = require('./lib/cheerio');
 var juice = juiceClient;

 module.exports = juice;

 juice.version = packageJson.version;

 juice.Selector = utils.Selector;
 juice.Property = utils.Property;
 juice.utils = utils;

 juice.ignoredPseudos = juiceClient.ignoredPseudos;
 juice.widthElements = juiceClient.widthElements;
 juice.tableElements = juiceClient.tableElements;
 juice.nonVisualElements = juiceClient.nonVisualElements;
 juice.styleToAttribute = juiceClient.styleToAttribute;

 juice.juiceDocument = juiceClient.juiceDocument;
 juice.inlineDocument = juiceClient.inlineDocument;
 juice.inlineContent = juiceClient.inlineContent;

 juice.codeBlocks = cheerio.codeBlocks;