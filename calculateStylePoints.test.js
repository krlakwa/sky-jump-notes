const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
  describe('stylePoints data validation', () => {
    it('should be an array with 5 elements', () => {
      const actual = calculateStylePoints([19, 5, 4, 3]);

      const expected = undefined;

      assert.equal(actual, expected);
    });
    it('should return undefined when one of array elements is larger than 20', () => {
      const actual = calculateStylePoints([19, 18.5, 32, 18, 17.5]);

      const expected = undefined;

      assert.equal(actual, expected);
    });
    it('should return undefined when one of aray elements is less than 0', () => {
      const actual = calculateStylePoints([19, 18, 19.5, -1, 17]);

      const expected = undefined;

      assert.equal(actual, expected);
    });
    it('should return undefined when one of array elements is not multiple of 0.5', () => {
      const actual = calculateStylePoints([19, 18.7, 20, 19, 17]);

      const expected = undefined;

      assert.equal(actual, expected);
    });
  });
  describe('calculating style points', () => {
    it('should remove two extreme values and calculate points', () => {
      const actual = calculateStylePoints([19, 19, 20, 18, 17.5]);

      const expected = 56;

      assert.equal(actual, expected);
    });
    it('should calculate points when all notes are the same', () => {
      const actual = calculateStylePoints([19.5, 19.5, 19.5, 19.5, 19.5]);

      const expected = 58.5;

      assert.equal(actual, expected);
    });
    it('should calculate points when all notes are different', () => {
      const actual = calculateStylePoints([19, 19.5, 20, 18, 17.5]);

      const expected = 56.5;

      assert.equal(actual, expected);
    });
    it('should calculate points when all notes equals 0', () => {
      const actual = calculateStylePoints([0, 0, 0, 0, 0]);

      const expected = 0;

      assert.equal(actual, expected);
    });
  });
});