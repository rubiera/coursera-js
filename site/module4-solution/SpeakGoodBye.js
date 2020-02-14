// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2


(function (window) {



  // STEP 3: Create an object, called 'helloSpeaker' to which you will attach
  // the "speak" method and which you will expose to the global context
  // See Lecture 52, part 1
  
  // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
  var speakWord = "Good Bye";
  
  var GoodbyeSpeaker = {
    SayGoodbye : function (name) {
         console.log(speakWord + " " + name);
        }
  }
  
  
  
  // STEP 4: Rewrite the 'speak' function such that it is attached to the
  // helloSpeaker object instead of being a standalone function.
  // See Lecture 52, part 2
  
  
  
  
  window.GoodbyeSpeaker = GoodbyeSpeaker
  
  // STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
  // 'helloSpeaker' on the global scope as well.
  // See Lecture 52, part 2
  // (Note, Step 6 will be done in the SpeakGoodBye.js file.)
  // xxxx.xxxx = helloSpeaker;
  
  
  })(window);