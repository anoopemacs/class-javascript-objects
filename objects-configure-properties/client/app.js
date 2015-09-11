o = {
  firstName: 'Evented',
  lastName: 'Mind'
};

Object.defineProperty(o, 'fullName', {
  enumerable: true,
  configurable: true,
  get: function () {
    console.log('getting the fullName');
    return this._fullName;
  },

  set: function (value) {
    this._fullName = value + '_modified';
  }
});
