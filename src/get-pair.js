/*
A function that returns the pair of two employees that have worked together the most and the total time they worked together in days
*/

export default function GetPair(workedTogether) {
  var pairs = [[],[],[]];
  for(var i = 0; i < workedTogether.length; i++) {
    if((pairs[0].includes(workedTogether[i][0]) === false || pairs[1].includes(workedTogether[i][0]) === false) && (pairs[0].includes(workedTogether[i][1]) === false || pairs[1].includes(workedTogether[i][1]) === false)) {
      pairs[0].push(workedTogether[i][0]);
      pairs[1].push(workedTogether[i][1]);
      pairs[2].push(workedTogether[i][3]);
    } else {
      for(var j = 0; j < pairs[0].length; j++) {
        if((pairs[0][j] === workedTogether[i][0] && pairs[1][j] === workedTogether[i][1]) || (pairs[0][j] === workedTogether[i][0] && pairs[1][j] === workedTogether[i][1])) {
          pairs[2][j] += workedTogether[i][3];
        }
      }
    }
  }
  var maxDays = 0;
  var indexOfMax = -1;
  for(var n = 0; n < pairs[2].length; n++) {
    if(maxDays < pairs[2][n]) {
      maxDays = pairs[2][n];
      indexOfMax = n;
    }
  }

  return [pairs[0][indexOfMax], pairs[1][indexOfMax], pairs[2][indexOfMax]];
}
