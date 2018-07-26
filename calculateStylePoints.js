const calculateStylePoints = (styleNotes) => {
  if (!styleNotes.every(isValue) || styleNotes.length === 5) {
    console.log('Notes are incorrect. Note should be equal or larger than 0, equal or smaller than 20 and should be multiple of 0.5');
    return;
  }
  
  styleNotes.splice( styleNotes.indexOf(Math.min(...styleNotes)),1);
  styleNotes.splice( styleNotes.indexOf(Math.max(...styleNotes)),1);
  return styleNotes.reduce((p, c) => p + c, 0);
};

const isValue = (el) => {
  return (el <= 20 && el >= 0) && el % 0.5 === 0;
};

module.exports = calculateStylePoints;
