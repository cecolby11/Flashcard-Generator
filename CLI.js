// =========
// LIBRARIES
// =========
var inquirer = require('inquirer');
var color = require('cli-color');

// ======
// flashcards 
// ======
// pull in flashcards
var flashcards = require('./flashcards.js');

// ================
// User Interaction
// ================ 
var deckTypes = ['Basic: Minimal Context, learn big picture','Cloze: Memorize Details'];
var selectedDeck;

function getDeckType() {
  inquirer.prompt({
    type: 'list',
    message: 'Study time? Choose your review style.',
    choices: deckTypes,
    name: 'deckType'
  }).then(function(userData){
    switch(deckTypes.indexOf(userData.deckType)) {
      case 0:
        selectedDeck = 'basicDeck';
        break;
      case 1:
        selectedDeck = 'clozeDeck';
        break;
      default: 
        selectedDeck = 'basicDeck';
    }
    // DISPLAY
    display.displayDeck();
  });
}
// =============
// DISPLAY
// =============
var display = {
  cardIndex: 0,
  deck: null,

  displayDeck: function() {
    this.deck = flashcards.data[selectedDeck];
    switch(selectedDeck) {
      case 'basicDeck':
        display.displayFrontBasic(this.deck[this.cardIndex]);
        break;
      case 'clozeDeck':
        display.displayCloze(this.deck[this.cardIndex]);
        break;
    }

  },

  displayFrontBasic: function(basicCard) {
    basicCard.displayFront();
    inquirer.prompt({
      type: 'list',
      message: 'What do you want to do?',
      name: 'continue',
      choices: ['flip to back', 'next card']
    }).then(function(userData){
      if (userData.continue === 'flip to back') {
        display.displayBackBasic(basicCard);
      } else {
        // if next card, display next card
        if (display.cardIndex < display.deck.length - 1) {
          display.cardIndex++;
          display.displayFrontBasic(display.deck[display.cardIndex]);
        } else {
          display.endDeck();
        }
      }
    });
  }, 

  displayBackBasic: function(basicCard) {
    basicCard.displayBack();
    inquirer.prompt({
      type: 'list',
      message: 'What do you want to do?',
      name: 'continue',
      choices: ['flip to front', 'next card']
    }).then(function(userData){
      if(userData.continue === 'flip to front') {
        display.displayFrontBasic(basicCard);
      } else {
        if (display.cardIndex < display.deck.length - 1){
          display.cardIndex++;
          display.displayFrontBasic(display.deck[display.cardIndex]);
        } else {
          display.endDeck();
        }
      } 
    });
  },

  displayCloze: function(clozeCard) {
    clozeCard.displayPartial();
  },

  endDeck: function() {
    console.log(color.red('\nEnd of deck! Great studying!\n'));
    inquirer.prompt({
      type: 'confirm',
      message: 'would you like to study more?',
      name: 'continue'
    }).then(function(userData){
      if(userData.continue === true) {
        getDeckType();
      }
    })
  }

};


// console.log(newBasic.front);
// console.log(newCloze.partialText);
// // the above should produce same output as: 
// newBasic.displayFront();
// newCloze.displayPartial();

// =============
// INITIALIZE
// =============
// read in the data, create the basic and cloze decks
// pass it getDeckType() as the callback so when it's done it starts the displaying of cards! 
flashcards.data.readData(getDeckType);



// TODO: 
// display to user one at a time
// shuffle deck
// basic cards: see front first or back first