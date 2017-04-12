// =========
// LIBRARIES
// =========

var fs = require("fs");

// =============
// CONSTRUCTORS
// =============

// pull in constructors
var ClozeCard = require("./cloze-card.js").ClozeCard;
var BasicCard = require("./basic-card.js").BasicCard;

// ======
// DATA
// ======

// read in data
fs.readFile("./knowledge.json", "utf8", function(error, fileData){
    if(error) {
      console.log(error);
    } else {
      var clozeDataArr = JSON.parse(fileData).data;
      createDeck(clozeDataArr);
    }
});

// =============
// CREATE DECKS
// =============

var clozeDeck = [];
var basicDeck = [];

function createDeck(dataArr) {
  for(var i = 0; i < dataArr.length; i++) {
    switch(dataArr[i].type) {
      case "cloze":
        var newCloze = new ClozeCard(dataArr[i]);
        clozeDeck.push(newCloze);
        break;
      case "basic":
        var newBasic = new BasicCard(dataArr[i]);
        basicDeck.push(newBasic);
        break;
      default: 
        var newBasic = new BasicCard(dataArr[i]);
        basicDeck.push(newBasic);
        break;
    }
  }
}

// console.log(newBasic.front);
// console.log(newCloze.partialText);
// // the above should produce same output as: 
// newBasic.displayFront();
// newCloze.displayPartial();
