function describeValue(value) {
 const type = typeof value;
 const truthiness = value ? "truthy" : "falsy";
 return `${type} | ${truthiness}`;
}
console.log(describeValue("0"));  
console.log(describeValue(NaN));  
console.log(describeValue(null));  
console.log(describeValue(25));  
console.log(describeValue("hello"));  
