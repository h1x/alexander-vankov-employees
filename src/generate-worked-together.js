import GetEmployeesTimeTogether from "./get-employee-time-together";

/*
A function that returns an array of the employees that have worked on projects together, the project ID and the time they have worked together on those projects
*/

export default function GenerateWorkedTogether(input) {
  var workedTogether = [];
  var projects = [];
  for(var i = 0; i < input.length; i++) {
    if(projects.includes(input[i][1]) === false) {
      projects.push(input[i][1]);
    }
  }

  for(var n = 0; n < projects.length; n++) {
    var filteredProjects = input.filter(x => x[1] === projects[n]);
    for(var j = 0; j < filteredProjects.length; j++) {
      for(var k = j + 1; k < filteredProjects.length; k++) {
        if(GetEmployeesTimeTogether(filteredProjects[j], filteredProjects[k]) > 0) {
          workedTogether.push([filteredProjects[j][0], filteredProjects[k][0], filteredProjects[j][1], GetEmployeesTimeTogether(filteredProjects[j], filteredProjects[k])]);
        }
      }
    }
  }

  return workedTogether;
}
