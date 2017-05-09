//testing code goes here

'use strict';

const assert = require('chai').assert;
const myApp = require('../app/library.js');

describe("Arithmetic Functionality", function() {
  it("should return an empty array if no argument is supplied", function() {
	  expect(getPrime()).toEqual([]);  
  })
  it("should return an empty array if 0 is supplied as argument", function() {
	  expect(getPrime(0)).toEqual([]);
  })
  it("should return invalid input message if -5 is supplied as argument", function() {
	  expect(getPrime(-5)).toEqual('invalid input');
  })
  it("should throw an error", function() {
	  let throMeAnError = () => {
		  throw new Error();
	  }expect(throwMeAnError).toThrow();
  })
  it("should be true if it evaluates to true", function() {
	  expect(getPrime(30)).toBeTruthy();
  })
  it("should be a number", function() {
	  expect(getPrime(3)).not.toBeNaN();
  })
  it("should return a list of all prime numbers from 0 to the number of the argument supplied", function() {
	  expect(getPrime(3)).toEqual([2,3]);
  })
  it("should return a list of all prime numbers from 0 to the number of the argument supplied", function() {
	  expect(getPrime(10)).toEqual([2, 3, 5, 7]);
  })
  it("should return a list of all prime numbers from 0 to the number of the argument supplied", function() {
	  expect(getPrime(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  })
  it("should contain an element of the array returned", function() {
	  expect(getPrime(30)).toContain(5);
  })
})





})