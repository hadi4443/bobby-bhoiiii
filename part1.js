let friends = ["Ali", "Aslam", "Hassan", "Zubair"] // one dimensional


document.writeln(friends)
console.log(friends);


// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);

for(let i = 0; i<friends.length; i++){
    console.log(friends[i])
}

// for of

for(let friend of friends){
    console.log(friend)
}


for(let friend in friends){
    console.log(friend)
}

let mdArr = [1,2,3,["a", "b", "c"], 4, 5]

console.log(mdArr[0]);
console.log(mdArr[1]);
console.log(mdArr[2]);
console.log(mdArr[3]);
console.log(mdArr[3][0]);
console.log(mdArr[3][1]);
console.log(mdArr[3][2]);
console.log(mdArr[4]);
console.log(mdArr[5]);
