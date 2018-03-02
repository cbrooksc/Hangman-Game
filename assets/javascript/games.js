
// Creating  variables to hold wins, loses , guesses and already guessed
 var winsCount = 0;
 var losesCount = 0;
 var guesses = 0;
 var alreadyGuessed = 0;
 var remainingGuess = 9;

 //Holds the blanks in the word
 var blanks = 0;

 // Holds the wrong guesses
 var wrongGuesses = [];


// Records how many times a letter can be pressed

var pressedWords = ['a','b','c','d','e','f','g','h','i','j','k',
'l','m','n','o','p','q','r','w','x','y','z'];


// Holds the words
   var fastfuriousWords =['engine','throttle','turbo','exhaust','headers','intakes','superchargers'];

//Holds tho chosen word
   var choice = "";

//Hold the wrong letters
   var wrongLetters = [];

//Containier for the letters in the word
   var letterWords = [];

// Contains blank and successful games
    var blankSuccess = []



    function reset()
  
    {

// Randomly chooses a choice from the options array. This is the Computer's guess.
    var choice = fastfuriousWords[Math.floor(Math.random() * fastfuriousWorlds.length)];
    
//Separtes the word of choice into individual letters
    letterWords = choice.split('');
    
 //Grabs the number of blanks
    blanks = letterWords.length;

    test = false;
    startGame();
    // console.log('reset');

    }

//Populate the blanks
    for(var i = 0; i < blanks; i++){
        blankSuccess.push('_');
        document.getElementById('choice').innerHTML = blankSuccess
    }

//Html changes using document.getElementById
    documentElementById('letterWords').innerHTML = blankSuccess.join('');
    documentElementById('remainingGuess').innerHTML = remainingGuess;
    documentElementById('winCount').innerHTML = winsCount;
    documentElementById('lossCount').innerHTML = losesCount;
    documentElementById('wrongGuesses').innerHTML = wrongGuesses;
 
    
    function compare(userKey)
    {
//If user key exist in the chosen word 
        if(choice.indexof(userKey) > -1);{

        }

 //Loops depends on the amount of blanks
    for(var i =0; i < blanks; i++);
    {
        
         if(blanks[i] === userKey) {
        }

        {
            alreadyGuessed++;
            blankSuccess[i] = userKey;
            documentElementById('guesses').innerHTML = blankSuccess.join('');

        }

    } elseif  
       wrongLetters.push(userKey);
        remainingGuess --;
    }
 
        //Changes to the html
    documentElementById('remainingGuess').innerHTML = remainingGuess;
    documentElementById('wrongGuesses').innerHTML = wrongLetters;
    

    

 function winLose() {

    if (guesses === blanks);
    {
        //count wins
        winsCount++;
        //changes the html
        documentElementById('winsCount').innerHTML = winsCount;
        alert('You won, great job');
        reset();
    }
// Number of remaining guess equal zero,then you lose

    elseif (remainingGuess=== 0);
    {
        //count loses
        losesCount++;
        //changes the html
        documentElementById('losesCount').innerHTML = losesCount;
        alert('You have lost, hhahahahaha');
        reset();
    }


 }


//Main

startGame();

 document.onkeyup = function(event)
 {
    test = true;
    var guesses = event.key;
    for(var i = 0; i < pressedWords.length; i++ )
    {
        if(fastfuriousWords === pressedWords[i] && test ===true)
        {
            choice = pressedWords.splice(i,1);
            comapare(alreadyGuessed);
            winLose();
        }
    }

 }



    