const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);

  return (distancePoints * 10 + stylePoints * 10 + (windFactor * 10 + gateFactor * 10)) / 10;
};


console.log(calculateTotalPoints(227.5, 'flying', 200, [18, 18.5, 17.5, 18.5, 18.5], -8.4, 8.7));
module.exports = calculateTotalPoints;
