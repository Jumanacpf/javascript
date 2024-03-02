let fruits=["apple","kiwi","mango","orange"];
let vegetables=["tomato","potato","beetroot"];

// length of Array
let size=fruits.length
console.log("length of Array : "+size);

// convert Array into string
let strg=fruits.toString()
console.log(strg);

// at()
let a=fruits.at(3)
console.log(a);

// join
let jn=fruits.join(" + ")
console.log(jn);

// push
let r=fruits.push("banana")
console.log(fruits);

// pop
let p=fruits.pop()
console.log(fruits);

// shift
let s=fruits.shift()
console.log(fruits);

// unshift
let us=fruits.unshift("pineapple")
console.log(fruits);

// concatination
let con=fruits.concat(vegetables)
console.log(con);

// copywithin
let x=con.copyWithin(2,1)
console.log(x);

// flat
let fl=[[1,2],[3,4],[5,6]]
let wq=fl.flat()
console.log(wq);

// splicing
let sp=con.splice(1,2,"onion")
console.log(con);

// slicing
let sl=con.slice(2)
console.log(sl);