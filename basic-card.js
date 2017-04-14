// ==========
// Libraries 
// ==========
var color = require('cli-color');

// ===========
// Constructor 
// ===========

function BasicCard(dataObject){
  this.front = dataObject.front;
  this.back = dataObject.back;
}

// ==========
// Display 
// ==========

BasicCard.prototype.displayFront = function(){
  console.log(color.bgYellow('\nfront\n'));
  console.log(color.yellow(this.front));
  console.log(color.bgYellow('\n\n'));
}

BasicCard.prototype.displayBack = function() {
  console.log(color.bgGreen('\nback\n'));
  console.log(color.green(this.back));
  console.log(color.bgGreen('\n\n'));
}

module.exports = {
  BasicCard: BasicCard
}
