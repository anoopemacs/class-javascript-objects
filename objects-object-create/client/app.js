myPrototypeObject = {
  sayHello: function () {
    return 'Hello!';
  }
};

// Performs two steps:
// 1) Create a new object
// 2) Inherit from myPrototypeObject by setting __proto__ = myPrototypeObject
myObject = Object.create(myPrototypeObject);

// Native Prototype Objects:
// Date.prototype
// Number.prototype
// Array.prototype
// Boolean.prototype
