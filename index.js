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
        this.response.speak("Die meisten Apfelsorten werden im Oktober und September geerntet. Aber viele Sorten gibt es das ganze Jahr lang aus Lagerung. Gut Biss!");
    }
    this.emit(':responseReady');
  },
  
  'ProduktIntent': function () {
    var myProdukt = this.event.request.intent.slots.produkt.value;
    if (myProdukt == "Birne") {
        this.response.speak("Birnen haben von August bis Mitte November Saison.");
    }
    this.emit(':responseReady');
  }
  
};

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
