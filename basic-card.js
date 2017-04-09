// basic-card constructor
function BasicCard(front,back){
  this.front = front;
  this.back = back;
}

// ==========
// Display 
// ==========

BasicCard.prototype.showFront = function(){
  console.log(this.front);
}

BasicCard.prototype.showBack = function() {
  console.log(this.back);
}

module.exports = {
  BasicCard: BasicCard
}