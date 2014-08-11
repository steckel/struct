var Struct = require('../../index.js'),
    assert = require('assert');

var herpDerp = new Struct({herp: "herp!", derp: "derp?"});
assert.deepEqual(['members', 'herp', 'derp'], Object.keys(herpDerp));
assert.deepEqual(['herp', 'derp'], herpDerp.members);

class AgeSexLocation extends Struct {
  constructor(properties) {
    this.members = ['age', 'sex', 'location'];
    super(properties);
  }
}

var asl = new AgeSexLocation();
assert.deepEqual(['members', 'age', 'sex', 'location'], Object.keys(asl));
assert.deepEqual(['age', 'sex', 'location'], asl.members);
assert.equal(undefined, asl.age);
assert.equal(undefined, asl.sex);
assert.equal(undefined, asl.location);

asl.age = 27;
asl.sex = "MALE";
asl.location = "San Francisco, California";
assert.equal(27, asl.age);
assert.equal("MALE", asl.sex);
assert.equal("San Francisco, California", asl.location);

var asl = new AgeSexLocation({age: 27, sex: "MALE", location: "San Francisco, California"});
assert.equal(27, asl.age);
assert.equal("MALE", asl.sex);
assert.equal("San Francisco, California", asl.location);

delete asl.age;
assert.deepEqual(['members', 'age', 'sex', 'location'], Object.keys(asl));

asl.name = "Name";
assert.deepEqual(['members', 'age', 'sex', 'location'], Object.keys(asl));
