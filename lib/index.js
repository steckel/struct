var Struct = function() {
  "use strict";

  function Struct(properties) {
    // TODO: enforce new keyword

    if (typeof this.members === 'undefined' || this.members === null) {
      this.members = Object.keys(properties);
    }

    this.members.forEach( function(key) {
      var value = (typeof properties !== "undefined" &&
          properties !== null ? properties[key] : undefined);

      Object.defineProperty(this, key, {
        enumerable: true,
        writable: true,
        comfigurable: false,
        value: value
      });
    }.bind(this));

    Object.preventExtensions(this);
  }

  return Struct;
}();

module.exports = Struct;
