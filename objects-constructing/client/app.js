Person = function () {
  this.name = 'Chris';
  this.year = 2014;
  this.toString = function () {
    return this.name + ' ' + this.year;
  }
};

person = new Person();
