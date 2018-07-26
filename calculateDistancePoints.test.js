const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
  describe('distancePoints data validation', () => {
    it('should return undefined when hillSize is not one of: normal, medium, flying', () => {
      const actual = calculateDistancePoints(110, 'small', 100);

      const expected = undefined;

      assert.equal(actual, expected);
    });
    it('should work when hillSize is large', () => {
      const actual = calculateDistancePoints(125, 'large', 120);

      const expected = 69;

      assert.equal(actual, expected);
    });
    it('should work when hillSize is normal', () => {
      const actual = calculateDistancePoints(115, 'normal', 100);

      const expected = 90;

      assert.equal(actual, expected);
    });
    it('should work when hillSize is flying', () => {
      const actual = calculateDistancePoints(220, 'flying', 200);

      const expected = 144;

      assert.equal(actual, expected);
    });
    it('should return undefined when distance is a negative number', () => {
      const actual = calculateDistancePoints(-100, 'large', 120);

      const expected = undefined;

      assert.equal(actual, expected);
    });
    it('should return undefined when kPoint is negative number', () => {
      const actual = calculateDistancePoints(130, 'large', -120);

      const expected = undefined;

      assert.equal(actual, expected);
    });
  });
  describe('calculating distance points', () => {
    it('should work when distance is larger than a kPoint', () => {
      const actual = calculateDistancePoints(130, 'large', 120);

      const expected = 78;

      assert.equal(actual, expected);
    });
    it('should work when distance is smaller than kPoint', () => {
      const actual = calculateDistancePoints(180, 'flying', 200);

      const expected = 96;

      assert.equal(actual, expected);
    });
    it('should work when distance equals kPoint', () => {
      const actual = calculateDistancePoints(100, 'normal', 100);

      const expected = 60;

      assert.equal(actual, expected);
    });
  });
});