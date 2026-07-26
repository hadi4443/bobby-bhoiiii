let months = ["january", "february", "march", "april"]

console.log(months)
months.push("may")
months.push("june")
months.push("july")

console.log(months)

months.pop()
months.pop()
console.log(months)


months.unshift("december")
months.unshift("novemeber")

console.log(months)

months.shift()
months.shift()
console.log(months)

let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]

console.log(arr1);
console.log(arr2);

// let arr3 = [arr1, arr2]
let arr3 = arr1.concat(arr2)
console.log(arr3)


// console.log(months.join("|"))

let students = ["hassan", "hadi", "jibran", "junaid", "waseem", "zain"]

// console.log(students);

// let threeStudents =  students.slice(0,3)
// console.log(students);

// console.log(threeStudents);

console.log(students);

let threeStudents = students.splice(0, 3, "value", "value")

console.log(students)
console.log(threeStudents)
// let marks = [23,34,54,76,90,26,73]

// console.log(marks)