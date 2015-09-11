SuperParent = {
  toString: function () {
    return 'SuperParent';
  }
};

Parent = {
  toString: function () {
    return this.firstName + ' ' + this.lastName;
  }
};

Parent.__proto__ = SuperParent;

Child = {
  firstName: 'Evented',
  lastName: 'Mind'
};

Child.__proto__ = Parent;
