const PaintCan = function(){
  this.can = [];
};

PaintCan.prototype.addLitres = function(litres){
  this.can.push(litres);
};

PaintCan.prototype.volume = function(){
  return this.can.length;
};

PaintCan.prototype.removeAllPaint = function(){
  this.can.splice(0, this.volume());
};

module.exports = PaintCan;
