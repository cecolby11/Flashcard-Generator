var ClozeCard = require("./cloze-card.js").ClozeCard;
var BasicCard = require("./basic-card.js").BasicCard;


var newCloze = new ClozeCard("George Washington was the first president of the United States", "George Washington");
var newBasic = new BasicCard("PTGW9p","GW");

console.log(newBasic.front);
console.log(newCloze.partialText);
// the above should produce same output as: 
newBasic.displayFront();
newCloze.displayPartial();




// TODO: 
// store cards created by user?  
