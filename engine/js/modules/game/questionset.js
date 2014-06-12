(function(){
  'use strict';
  var QuestionSet = CollectionPlayer.extend({
    defaults: {
        collection_name: "questions"
    },
    play: function(){
      var that=this;
      this.prepareTemplate();
      this.steps = new Steppable(function(){
        this.step(
            that.stepCountDown.bind(that, function(){
                that.steps.next();
            })
        );

        that.get(that.collection_name()).forEach(function(playalbe){
          this.step(function(){
            playalbe.play();
          });
        }, this);
        that.get("parent") && this.step(function(){
          that.get("parent").next();
        });
      }, this)
      this.steps.next();
    },
    hasNextStep: function(){
      return this.steps.hasNextStep() || this.get("parent").steps.hasNextStep();
    },
    stepCountDown: function(callback){
        var that=this;
        app.canvas.innerHTML = "";
        app.canvas.appendChild(this.countdownElement);
        setTimeout(function(){
            app.canvas.querySelector('.counter h1').innerHTML =  2;
        }, 1000);
        setTimeout(function(){
            app.canvas.querySelector('.counter h1').innerHTML =  1;
        }, 2000);
        setTimeout(function(){
            callback();
        }, 3000);

    },
    prepareTemplate: function(){
        var that=this;
        App.render("game/countdown", {}, function(err, out) {
            var range = document.createRange();
            that.countdownElement = range.createContextualFragment(out);
        });
    }
  });
  App.registerPlayable('game.questionset', QuestionSet);
})();