const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
  describe('flying hill', () => {
   it('should work when windFactor is negative', () => {
    const actual = calculateTotalPoints(227.5, 'flying', 200, [18, 18.5, 17.5, 18.5, 18.5], -8.4, 8.7);

    const expected = 208.3;

    assert.equal(actual, expected);
   });
   it('should work when windFactor equals 0', () => {
    const actual = calculateTotalPoints(227.5, 'flying', 200, [18, 18.5, 17.5, 18.5, 18.5], 0, 8.7);

    const expected = 216.7;

    assert.equal(actual, expected);
   });
   it('should work when teh windFactor is positive', () => {
    const actual = calculateTotalPoints(227.5, 'flying', 200, [18, 18.5, 17.5, 18.5, 18.5], 3.3, 8.7);

    const expected = 220;

    assert.equal(actual, expected);
   });
   it('should work when gateFactor is positive', () => {
     const actual = calculateTotalPoints(226, 'flying', 200, [18.5, 18.5, 18.5, 18, 18.5], -8.9, 8.7);

     const expected = 206.5;

     assert.equal(actual, expected);
   });
   it('should work when gateFactor equals 0', () => {
    const actual = calculateTotalPoints(228.5, 'flying', 200, [18, 18.5, 19, 19, 18.5], -8.8, 0);

    const expected = 201.4;

    assert.equal(actual, expected);
   });
   it('should work when gateFactor is negative', () => {
    const actual = calculateTotalPoints(228.5, 'flying', 200, [18, 18.5, 19, 19, 18.5], -8.8, -8.7);

    const expected = 192.7;

    assert.equal(actual, expected);
   });
  });
  describe('large hill', () => {
    it('should work when windFactor is negative', () => {
      const actual = calculateTotalPoints(134, 'large', 120, [19, 20, 19.5, 19, 18.5], -5.4, 0);
  
      const expected = 137.3;
  
      assert.equal(actual, expected);
     });
     it('should work when windFactor equals 0', () => {
      const actual = calculateTotalPoints(134, 'large', 120, [19, 20, 19.5, 19, 18.5], 0, 0);
  
      const expected = 142.7;
  
      assert.equal(actual, expected);
     });
     it('should work when teh windFactor is positive', () => {
      const actual = calculateTotalPoints(134, 'large', 120, [19, 20, 19.5, 19, 18.5], 7.3, 0);
  
      const expected = 150;
  
      assert.equal(actual, expected);
     });
     it('should work when gateFactor is positive', () => {
       const actual = calculateTotalPoints(133, 'large', 120, [18.5, 18.5, 19, 19, 19], -5.1, 5.2);
  
       const expected = 140;
  
       assert.equal(actual, expected);
     });
     it('should work when gateFactor equals 0', () => {
      const actual = calculateTotalPoints(133, 'large', 120, [18.5, 18.5, 19, 19, 19], -5.1, 0);
  
      const expected = 134.8;
  
      assert.equal(actual, expected);
     });
     it('should work when gateFactor is negative', () => {
      const actual = calculateTotalPoints(133, 'large', 120, [18.5, 18.5, 19, 19, 19], -5.1, -4.8);
  
      const expected = 130;
  
      assert.equal(actual, expected);
     });
  });
  describe('normal hill', () => {
    it('should work when windFactor is negative', () => {
      const actual = calculateTotalPoints(111, 'normal', 98, [19, 19.5, 19, 19, 19], -14.4, 3.2);
  
      const expected = 131.8;
  
      assert.equal(actual, expected);
     });
     it('should work when windFactor equals 0', () => {
      const actual = calculateTotalPoints(111, 'normal', 98, [19, 19.5, 19, 19, 19], 0, 3.2);
  
      const expected = 146.2;
  
      assert.equal(actual, expected);
     });
     it('should work when teh windFactor is positive', () => {
      const actual = calculateTotalPoints(111, 'normal', 98, [19, 19.5, 19, 19, 19], 14.4, 3.2);
  
      const expected = 160.6;
  
      assert.equal(actual, expected);
     });
     it('should work when gateFactor is positive', () => {
       const actual = calculateTotalPoints(106.5, 'normal', 98, [18.5, 18.5, 18.5, 19, 19], -13.5, 6.4);
  
       const expected = 125.9;
  
       assert.equal(actual, expected);
     });
     it('should work when gateFactor equals 0', () => {
      const actual = calculateTotalPoints(106.5, 'normal', 98, [18.5, 18.5, 18.5, 19, 19], -13.5, 0);
  
      const expected = 119.5;
  
      assert.equal(actual, expected);
     });
     it('should work when gateFactor is negative', () => {
      const actual = calculateTotalPoints(106.5, 'normal', 98, [18.5, 18.5, 18.5, 19, 19], -13.5, -6.4);
  
      const expected = 113.1;
  
      assert.equal(actual, expected);
     });
  });
});
