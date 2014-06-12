(function(){
  'use strict';
  var Game = CollectionPlayer.extend({
    defaults: {
      collection_name: "sets"
    },
    play: function(){
      this.theming();
      CollectionPlayer.prototype.play.apply(this, arguments);
    },
    theming: function(){
      var theme;
      theme = this.get("data").theme;
      theme.assets = App.assets;
      document.getElementById("theme-game").innerHTML = "";
      if(theme){
        App.render("theme", theme, function(err, out) {
          document.getElementById("theme-game").innerHTML = out;
        },"css");
      }
    },
    hasNextStep: function(){
      return this.steps.hasNextStep();
    }
  });
  App.registerPlayable('game',Game);
})();