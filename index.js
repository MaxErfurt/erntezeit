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
    this.emit(':responseReady');
    }
    if (myProdukt == "birne") {
        this.response.speak("Birnen haben von August bis Mitte November Saison. Tipp vom Profi: Birnen-Cider gibt es das ganze Jahr!");
    this.emit(':responseReady');
    }
    if (myProdukt == "kirsche") {
        this.response.speak("Kirschen haben von Juni bis Mitte September Saison. Kirschwasser? Immer!");
    this.emit(':responseReady');
    }
    if (myProdukt == "mirabelle") {
        this.response.speak("Mirabellen haben von Juli bis Mitte September Saison.");
    this.emit(':responseReady');
    }
    if (myProdukt == "pflaume") {
        this.response.speak("Pflaumen haben von Juli bis Mitte Oktober Saison.");
    this.emit(':responseReady');
    }
    if (myProdukt == "quitte") {
        this.response.speak("Quitten haben von August bis Mitte November Saison.");
    this.emit(':responseReady');
    }
    if (myProdukt == "aprikose") {
        this.response.speak("Aprikosen haben im Juli und August Saison.");
    this.emit(':responseReady');
    }
    if (myProdukt == "maulbeere") {
        this.response.speak("Maulbeeren haben von Mitte Juni bis Mitte August Saison. Was auch immer Maulbeeren sind.");
    this.emit(':responseReady');
    }
    if (myProdukt == "brombeere") {
        this.response.speak("Brombeeren haben von August bis Oktober Saison.");
    this.emit(':responseReady');
    }
    if (myProdukt == "himbeere") {
        this.response.speak("Himbeeren haben von Mitte Juni bis August Saison.");
    this.emit(':responseReady');
    }
    if (myProdukt == "heidelbeere") {
        this.response.speak("Heidelbeeren haben von Mitte Juni bis August September.");
    this.emit(':responseReady');
    }
  }
};

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
