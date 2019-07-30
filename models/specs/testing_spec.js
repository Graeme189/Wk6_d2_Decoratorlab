const assert = require('assert');
const Room = require('../room.js');
const PaintCan = require('../paint_can.js');
const Decorator = require('../decorator.js');

describe('Room', function(){
  let room;

  beforeEach(function(){
    room = new Room(100, true, false);
  });

  it('should have an area', function(){
    const actual = room.area;
    assert.strictEqual(actual, 100);
  });

  it('should be able to be painted', function(){
    const actual = room.status;
    assert.strictEqual(actual, true);
  });

  it('should be unpainted', function(){
    const actual = room.painted_status;
    assert.strictEqual(actual, false);
  });

});

describe('Paintcan', function(){
  let paintcan;

  beforeEach(function(){
    paintcan = new PaintCan();
  });

  it('should be empty', function(){
    const actual = paintcan.can;
    assert.deepStrictEqual(actual, []);
  });

  it('should have a volume of 0', function(){
    const actual = paintcan.volume();
    assert.strictEqual(actual, 0);
  });

  it('should be able to add litres', function(){
    paintcan.addLitres(1);
    paintcan.addLitres(1);
    paintcan.addLitres(1);
    const actual = paintcan.volume();
    assert.strictEqual(actual, 3);
  });

  it('should be able to empty itself of paint', function(){
    paintcan.addLitres(1);
    paintcan.addLitres(1);
    paintcan.removeAllPaint();
    const actual = paintcan.volume();
    assert.strictEqual(actual, 0);
  });

});

describe('Decorator', function(){
  let decorator;

  beforeEach(function(){
    decorator = new Decorator;
  });

  it('should have an empty paint stock', function(){
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a can of paint', function(){
    decorator.addPaintCan(1);
    decorator.addPaintCan(1);
    const actual = decorator.checkStock();
    assert.strictEqual(actual, 2);
  })

});
