// Nullish Coalescing
// || vs ??
const firstname = "shashank"
// null or undefined 
const lastname = null
const fullname = firstname || lastname
console.log(fullname) // shashank
// if we use nullish coalescing operator then it will return null
let firstname2
const fullname2 = firstname2 ?? lastname
console.log(fullname2) // null
