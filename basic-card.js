// basic-card constructor
function BasicCard(dataObject){
  this.front = dataObject.front;
  this.back = dataObject.back;
}

// ==========
// Display 
// ==========

BasicCard.prototype.displayFront = function(){
  console.log(this.front);
}

BasicCard.prototype.displayBack = function() {
  console.log(this.back);
}

module.exports = {
  BasicCard: BasicCard
}