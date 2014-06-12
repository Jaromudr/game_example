(function(){
  'use strict';

  var letters=['A','B','C','D'],Question;
  dust.helpers.lcounter = function(chunk, context, bodies) {
    return bodies.block(chunk, context.push(letters[context.stack.index]));
  };

  Question = Playable.extend({
    defaults: {
      path_or_json: null,
      data: {}
    },
    initialize: function(){
      Playable.prototype.initialize.apply(this, arguments);
    },
    play: function(){
      var that=this;
      this.theming();
      this.buildFromJSON(this.get("path_or_json"));
      this.steps = new Steppable(function(){
        this.step(that.stepQuestion);
        this.step(that.stepAnswers);
        this.step(that.stepCorrectAnswers);
        if(that.get("data").explanation){
          this.step(that.stepExplanation);
        }
        this.step(function(){
          app.canvas.removeEventListener('click', that.clickListener);
          document.removeEventListener('click', that.keydownListener);
          if(that.get("parent").hasNextStep()){
            this.untheming();
            that.get("parent").next();
          }
        });
      }, this);
      app.canvas.addEventListener('click', this.clickListener = this.steps.next.bind(this.steps));
      document.addEventListener('keydown', this.keydownListener = this.steps.next.bind(this.steps));
      this.steps.next();
    },
    theming: function(){
      var theme;
      theme = this.get("data").theme;
      theme.assets = App.assets;
      document.getElementById("theme-question").innerHTML = "";
      if(theme){
        App.render("theme", theme, function(err, out) {
          document.getElementById("theme-question").innerHTML = out;
        },"css");
      }
    },
    untheming: function(){
      document.getElementById("theme-question").innerHTML = "";
    },
    stepQuestion: function(){
      app.canvas.innerHTML = "";
      app.canvas.appendChild(this.questionElement);
    },
    stepAnswers: function(){
      app.canvas.innerHTML = "";
      app.canvas.appendChild(this.answersElement);
    },
    stepCorrectAnswers: function(){
      $(app.canvas.querySelector("article")).addClass("correct");
    },
    stepExplanation: function(){
      app.canvas.innerHTML = "";
      app.canvas.appendChild(this.explanationElement);
    },
    buildFromJSON: function(data){
      var that=this;
      this.set('data', data);
      data.logo = data.theme.logo || App.globalLogo;
      data.assets = App.assets;
      App.render("game/question", data, function(err, out) {
        var range = document.createRange();
        that.questionElement = range.createContextualFragment(out);
      });
      App.render("game/answers", data, function(err, out) {
        var range = document.createRange();
        that.answersElement = range.createContextualFragment(out);
      });
      if(data.explanation){
        App.render("game/explanation", data, function(err, out) {
          var range = document.createRange();
          that.explanationElement = range.createContextualFragment(out);
        });
      }
    }
  });
  App.registerPlayable('game.questionset.question',Question);
})();