Person = function (name) {
  this.name = name;
};

Person.prototype.sayHello = function () {
  return 'Hello, ' + this.name;
};

me = new Person('Chris');

myNumber = 5;
