//testing code goes here

'use strict';

const assert = require('chai').assert;
const myApp = require('../app/library.js');

describe("Arithmetic Functionality", function() {
  it("should return an empty array if no argument is supplied", function() {
  	assert(myApp.getPrime() == []);
  })
  it("should return an empty array if 0 is supplied as argument", function() {
  	assert(myApp.getPrime(0) == []);
  })
  it("should return invalid input message if -5 is supplied as argument", function() {
  	assert(myApp.getPrime(-5) == 'invalid input');
  })
  it("should return invalid input message if -25 is supplied as argument", function() {
  	assert(myApp.getPrime(-25) == 'invalid input');
  })
  it("should return invalid input message if -30 is supplied as argument", function() {
  	assert(myApp.getPrime(-30) == 'invalid input');
  })
  it("should return invalid input message if type of argument supplied is a string", function() {
  	assert(myApp.getPrime('boy') == 'invalid input');
  })
  it("should return a list of all prime numbers from 0 to the number of the argument supplied", function() {
  	assert(myApp.getPrime(3) == [2, 3]);
  })
  it("should return a list of all prime numbers from 0 to the number of the argument supplied", function() {
  	assert(myApp.getPrime(10) == [2, 3, 5, 7]);
  })
  it("should return a list of all prime numbers from 0 to the number of the argument supplied", function() {
  	assert(myApp.getPrime(30) == [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  })
  it("should return an invalid input message if an empty string argument is supplied", function() {
  	assert(myApp.getPrime("") == 'invalid input');
  })
})





})