(function(){
    'use strict';
    var Intro, Outro;
    Intro = Playable.extend({
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
                this.step(that.stepPlay);
                this.step(function(){
                    app.canvas.removeEventListener('click', that.clickListener);
                    document.removeEventListener('keydown', that.keydownListener);
                    this.untheming();
                    that.get("parent").next();
                });
            }, this);
            app.canvas.addEventListener('click', this.clickListener = this.steps.next.bind(this.steps));
            document.addEventListener('keydown', this.keydownListener = this.steps.next.bind(this.steps))
            this.steps.next();
        },
        stepPlay: function(){
            app.canvas.innerHTML = "";
            app.canvas.appendChild(this.textElement);
        },
        buildFromJSON: function(data){
            var that=this;
            this.set('data', data);
            App.render("game/intro", data, function(err, out) {
                var range = document.createRange();
                that.textElement = range.createContextualFragment(out);
            });
        },
        theming: function(){
            var theme;
            theme = this.get("data").theme;
            theme.assets = App.assets;
            document.getElementById("theme-intro").innerHTML = "";
            if(theme){
                App.render("theme", theme, function(err, out) {
                    document.getElementById("theme-intro").innerHTML = out;
                },"css");
            }
        },
        untheming: function(){
            document.getElementById("theme-intro").innerHTML = "";
        }
    });

    Outro = Intro.extend({
        stepPlay: function() {
            app.canvas.innerHTML = "";
            app.canvas.appendChild(this.textElement);
            jQuery('audio').attr('autoplay', 'autoplay');

            // ipad hack to enable autoplay
            jQuery('audio').each(function(idx, elt) {
                $(elt)[0].play();
            });
        },
        buildFromJSON: function(data){
            var that=this, torender;
            this.set('data', data);
            data.assets = App.assets;
            App.render("game/outro", data, function(err, out) {
                var range = document.createRange();
                that.textElement = range.createContextualFragment(out);
            });
        }
    });

    App.registerPlayable('game.intro',Intro);
    App.registerPlayable('game.outro',Outro);
})();