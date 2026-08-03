const students = [
  { name: "Aswin", marks: 10 },
  { name: "Adarsh", marks: 20 }
];

const studentNames = students.map((student, index, students) => {
  return student.name;
});

console.log(`Student names in array are = ${studentNames}`);

// let objectArray = [ {name: "name1", marks: 10}, {name: "name2", marks: 20} ];
// let mapName = objectArray.map(variable => variable.name);
// console.log(mapName);