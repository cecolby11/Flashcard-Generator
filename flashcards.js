// =========
// LIBRARIES
// =========
var fs = require('fs');


// =============
// CONSTRUCTORS
// =============
// pull in constructors
var ClozeCard = require('./cloze-card.js').ClozeCard;
var BasicCard = require('./basic-card.js').BasicCard;

// ======
// DATA
// ======
var data = {
  clozeDeck: [],
  basicDeck: [],

  createDecks: function(dataArr, func) {
    for(var i = 0; i < dataArr.length; i++) {
      switch(dataArr[i].type) {
        case 'cloze':
          var newCloze = new ClozeCard(dataArr[i]);
          this.clozeDeck.push(newCloze);
          break;
        case 'basic':
          var newBasic = new BasicCard(dataArr[i]);
          this.basicDeck.push(newBasic);
          break;
        default: 
          var newBasic = new BasicCard(dataArr[i]);
          this.basicDeck.push(newBasic);
          break;
      }
    }
    // once done, callback: 
    func();
  },

  readData: function(func) {
    fs.readFile('./knowledge.json', 'utf8', function(error, fileData){
        if(error) {
          console.log(error);
        } else {
          var clozeDataArr = JSON.parse(fileData).data;
          data.createDecks(clozeDataArr, func);
        }
    });
  } 
}

module.exports = {
  data: data
}
