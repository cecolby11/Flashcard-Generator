// =========
// LIBRARIES
// =========
var inquirer = require("inquirer");

// ================
// User Interaction
// ================ 
var selectedDeckType;
function getDeckType() {
  inquirer.prompt({
    type: "list",
    message: "Welcome! Choose a deck format to review with.",
    choices: ["Basic: simple front/back flashcards","Cloze: text item with a portion removed."],
    name: "deckType"
  }).then(function(userData){
    selectedDeckType = userData.deckType;
    console.log(selectedDeckType);
  });
}

// =============
// INITIALIZE
// =============
getDeckType();