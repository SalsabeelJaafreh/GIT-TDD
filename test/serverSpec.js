  // TODO: Your code here
var expect = require('chai').expect;
var mongoose = require('mongoose');
var Cat = require('../database/index.js')
var app1=require('../server/index.js')

describe('Cat Model', function () {

 it('should have a method that save the cat in the database', function (done) {
     Cat.save('','')
       expect(function(){}).to.exist;
     done();

});

 it('should have a method that return all the cat in the database', function (done) {
    app1.get('','')
   expect(function(){}).to.exist();
   done();
});









 });