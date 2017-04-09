var ClozeCard = require("./cloze-card.js").ClozeCard;
var BasicCard = require("./basic-card.js").BasicCard;


var newCloze = new ClozeCard("George Washington was the first president of the United States", "George Washington");
var newBasic = new BasicCard("PTGW9p","GW");


newCloze.displayPartial();

// TODO: 
// create cloze partial text
// log error if cloze isn't in full text 
// store cards created by user 
