class Struct {
  constructor(properties) {
    // TODO: enforce new keyword

    if (typeof this.members === 'undefined' || this.members === null) {
      this.members = Object.keys(properties);
    }

    this.members.forEach( (key) => {
      var value = (typeof properties !== "undefined" &&
          properties !== null ? properties[key] : undefined);

      Object.defineProperty(this, key, {
        enumerable: true,
        writable: true,
        comfigurable: false,
        value: value
      });
    });

    Object.preventExtensions(this);
  }
}

module.exports = Struct;
