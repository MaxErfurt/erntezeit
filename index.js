"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  'LaunchRequest': function() {
    this.response.speak("Von welchem Obst oder Gemüse möchtest du wissen, ob es Saison hat?").listen("Ich habe dich nicht verstanden. Von welchem Obst oder Gemüse möchtest du wissen, ob es Saison hat?");
    this.emit(':responseReady');
  },

  'ProduktIntent': function () {
    var myProdukt = this.event.request.intent.slots.produkt.value;
    if (myProdukt == "apfel") {
        this.response.speak("Correct! Python is the most popular language.");
    }
    else {
        this.response.speak("You guessed that " + myProdukt + " is the most popular. Actually, Python is our most popular language");
    }
    this.emit(':responseReady');
  }
}

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
