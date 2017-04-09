// basic-card constructor
function BasicCard(front,back){
  this.front = front;
  this.back = back;
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