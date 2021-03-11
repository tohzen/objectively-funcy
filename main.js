// Your code here.

// Your code here.

function getFirstName(str) {
  return str.firstName

}

function getLastName(str) {
  return str.lastName
}

function getFullName(str) {
  return str.firstName + " " + str.lastName
}

function setFirstName(str, str2) {
  str.firstName = str2; 
}

function setAge(str, str2) {
  str.age = str2
}

function giveBirthday(num1) {
  if(num1.age === undefined) {
    return num1.age =1;
  } else {
    num1.age = num1.age +1;
  }
  }

function marry(person1, person2) {
  person1.married = true;
  person2.married = true;
  person1.spouseName = getFullName(person2);
  person2.spouseName = getFullName(person1);
  
}

function divorce(person1, person2) {
  person1.married = false;
  person2.married = false;
  delete person1.spouseName
  delete person2.spouseName
  
}




// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
