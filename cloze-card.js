// cloze-card constructor
function ClozeCard(text, cloze){
  // full text - the entire sentence
  this.fullText = text;
  // cloze deletion - the text to remove
  this.clozeDeletion = cloze;
  // index of cloze in partial text (-1 if not found)
  this.clozeIndex = this.fullText.indexOf(this.clozeDeletion);
  // partial text - remaining text if cloze deletion removed from full text 
  this.partialText = this.generatePartialText();
}

// use prototypes to attach the following methods:

// ===============
// Cloze Creation
// =============== 

ClozeCard.prototype.generatePartialText = function() {
  // determine whether string is in the full text 
  // indexOf returns -1 if not found 
  if(this.clozeIndex === -1) {
    this.displayError();
  } else {
    var substr1 = this.fullText.substring(0,this.clozeIndex);
    var endIndex = this.clozeIndex + this.clozeDeletion.length;
    var substr2 =this.fullText.substring(endIndex);

    var concat = substr1 + "..." + substr2;
    return concat;
  }
}

// ==========
// Display 
// ==========

// this method displays an error if the cloze is not found in the fulltext  
ClozeCard.prototype.displayError = function() {
  console.log("Oops, that fragment wasn't found in the full text.")
}

// this method returns the full text
ClozeCard.prototype.displayFull = function() {
  console.log(this.fullText);
}

// this method returns only the cloze deletion 
ClozeCard.prototype.displayCloze = function() {
  console.log(this.clozeDeletion);
}

// this method returns only the partial text 
ClozeCard.prototype.displayPartial = function() {
  console.log(this.partialText);
}

module.exports = {
  ClozeCard: ClozeCard
}