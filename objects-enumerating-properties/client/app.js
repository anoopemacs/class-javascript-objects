var myParent = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  }
};

myObject = Object.create(myParent);
myObject.firstName = 'Evented';
myObject.lastName = 'Mind';

for (var prop in myObject) {
  if (myObject.hasOwnProperty(prop)) {
    console.log(prop, ': ', myObject[prop]);
  }
}

keys = Object.keys(myObject);
console.log(keys);
