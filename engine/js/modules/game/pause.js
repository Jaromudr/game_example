(function(){
  'use strict';

  function getClientHeight(){
      if(window.innerHeight){
          return window.innerHeight
      } else {
          if(document.documentElement.clientHeight){
              return document.documentElement.clientHeight
          } else {
              return document.body.offsetHeight
          }
      }
  }

  function getClientWidth(){
      if(window.innerWidth){
          return window.innerWidth
      } else {
          if(document.documentElement.clientWidth){
              return document.documentElement.clientWidth
          } else {
              return document.body.offsetWidth
          }
      }
  }

  var Pause = Playable.extend({
    defaults: {
      path_or_json: null,
      data: {}
    },
    initialize: function(){
      Playable.prototype.initialize.apply(this, arguments);
    },
    play: function(){
      var that=this;
      this.buildFromJSON(this.get("path_or_json"));
      this.steps = new Steppable(function(){
        this.step(that.stepPlay);
        this.step(function(){
          if(that.player){
            that.player.remove();
          }
          app.canvas.removeEventListener('click', that.clickListener);
          document.removeEventListener('keydown', that.keydownListener);
          that.get("parent").next();
        });
      }, this);
      this.steps.next();
    },
    stepPlay: function(){
      var video, player, loader, that=this;
      app.canvas.innerHTML = "";
      app.canvas.appendChild(this.customElement);
      loader = app.canvas.querySelector(".loader");
      if(video = app.canvas.querySelector("video")){
        video.style.width = getClientWidth()+"px";
        video.style.height = getClientHeight()+"px";
        loader.style.width = getClientWidth()+"px";
        loader.style.height = getClientHeight()+"px";
        var options = {
          success: function (media, node, player) {
            media.addEventListener('ended', that.steps.next.bind(that.steps));
          },
          enableAutosize: false,
          videoWidth: getClientWidth(),
          videoHeight: getClientHeight(),
          features: []
        }
        if(window.location.protocol !== "file:" && window.chrome){
          options.mode = "shim";
        }
        //changeVideoSize();
        player = new MediaElementPlayer("video", options);

        setTimeout(function(){
          player.play();
          $(".loading").removeClass("loading");
          app.canvas.addEventListener('click', that.clickListener = that.steps.next.bind(that.steps));
          document.addEventListener('keydown', that.keydownListener = that.steps.next.bind(that.steps));
        }, 1000);
        player.play();
        this.player = player;
      } else {
        // Flash or image
          app.canvas.addEventListener('click', this.clickListener = this.steps.next.bind(this.steps));
          document.addEventListener('keydown', this.keydownListener = this.steps.next.bind(this.steps));
      }
    },
    buildFromJSON: function(data){
      var that=this, template;
      this.set('data', data);
      data.assets = App.assets;
      template = "game/pause_" + data.type;

      App.render(template, data, function(err, out) {
        var range = document.createRange();
        that.customElement = range.createContextualFragment(out);
      });
    }
  });

  App.registerPlayable('game.pause',Pause);
})();