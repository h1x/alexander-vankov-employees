/*
A utility function that porcesses the input file and returns an array with the data from it
*/

export default function GenerateArray(input) {
  var inputSplit = input.split(/[\s,\n]+/);
  var result = [];
  for(var i = 0; i < inputSplit.length; i+=4) {
    result.push([inputSplit[i], inputSplit[i + 1], inputSplit[i + 2], inputSplit[i + 3]]);
  }

  return result;
}
