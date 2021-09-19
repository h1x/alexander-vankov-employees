/*
A utility function that return the total days that two employees have worked together on a common project
*/

export default function GetEmployeesTimeTogether(employee1, employee2) {
  var firstStart = Date.parse(employee1[2]);
  var firstEnd;
  var secondStart = Date.parse(employee2[2]);
  var secondEnd;

  if(employee1[3] === 'NULL') {
    firstEnd = new Date();
    firstEnd = firstEnd.toISOString().split('T')[0];
    firstEnd = Date.parse(firstEnd);
  } else {
    firstEnd = Date.parse(employee1[3])
  }
  if(employee2[3] === 'NULL') {
    secondEnd = new Date();
    secondEnd = secondEnd.toISOString().split('T')[0];
    secondEnd = Date.parse(secondEnd)
  } else {
    secondEnd = Date.parse(employee2[3])
  }

  if(firstStart < secondEnd && secondStart < firstEnd) {
      return (Math.min(firstEnd, secondEnd) - Math.max(firstStart, secondStart)) / (1000 * 3600 * 24);
  } else {
    return 0;
  }
}
