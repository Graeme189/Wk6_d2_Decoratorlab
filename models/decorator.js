const Decorator = function(){
  this.stock = [];
  this.paintcan = [];
}

Decorator.prototype.addPaintCan = function(paintcan){
  this.stock.push(paintcan);
};

Decorator.prototype.checkStock = function(){
  return this.stock.length;
}

Decorator.prototype.checkVolume = function(){
  for can in this.stock
    can = (can + 1)
};

module.exports = Decorator;
