Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Person.prototype.toString = function () {
  return this.firstName + ' ' + this.lastName;
};

Person.prototype.getName = function () {
  return this.firstName;
};

person = new Person('Evented', 'Mind');
