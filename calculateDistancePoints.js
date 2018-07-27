const calculateDistancePoints = (distance, hillSize, kPoint) => {
  if (hillSize !== 'normal' && hillSize !== 'large' && hillSize !== 'flying') {
    console.log('Hill size must be one of: normal, large, flying');
    return;
  }

  if (distance < 0 || kPoint < 0) {
    console.log('Distance and kPoint cannot be smaller than 0');
    return;
  }

  const pointedDistance = Math.round((distance - kPoint) * 2) / 2;
  
  switch (hillSize.toUpperCase()) {
    case 'NORMAL': {
      const hillPoints = 60;
      const hillMultiplier = 2;

      return distancePoints(hillPoints, pointedDistance, hillMultiplier);
      
    }
    case 'LARGE': {
      const hillPoints = 60;
      const hillMultiplier = 1.8;

      return distancePoints(hillPoints, pointedDistance, hillMultiplier);
    }
    case 'FLYING': {
      const hillPoints = 120;
      const hillMultiplier = 1.2;

      return distancePoints(hillPoints, pointedDistance, hillMultiplier);
    }
  }
}

const distancePoints = (hillPoints, pointedDistance, hillMultiplier) => hillPoints + (pointedDistance * hillMultiplier);

module.exports = calculateDistancePoints;
