(function() {
	'use strict';
	var app, App, modules = {}, compiled = {}	;
	// App will be contains from modules,
	// each module know exactly how it can pe played,
	// So wee need to create BasePlayModule model
	App = CollectionPlayer.extend({
		defaults: {
			path_or_json: "content/structure.json",
			collection_name: "app"
		},
		build: function() {
			var that=this;
			this.readFromJSON();
			App.render("play-container", {
				title: "App start"
			}, function(err, out) {
				var range = document.createRange();
				document.body.appendChild(
					range.createContextualFragment(out)
				);
				that.canvas = document.querySelector(".play-canvas");
				// Force render for Safari
				setTimeout(function(){
					$(".play-container").css("height", "101%");
				},1);
				setTimeout(function(){
					$(".play-container").css("height", "100%");
				},2);

                var ua = navigator.userAgent;
                var is_iPad = /iPad/i.test(ua) || /iPhone OS 3_1_2/i.test(ua) || /iPhone OS 3_2_2/i.test(ua);

                if (is_iPad) {
                    $(".fullscreen-enter").remove();
                } else {
                    $(".fullscreen-enter").click(function(){
                        $(this).remove();
                        runPrefixMethod(document, "FullScreen") || runPrefixMethod(document, "IsFullScreen") || runPrefixMethod(document.body, "RequestFullScreen");
                    });
                }
			})
		},
		play: function(){
            CollectionPlayer.prototype.play.apply(this, [true]);
        }
	}, {
		templates_folder: "engine/templates/",
		registerPlayable: function(module_name, module) {
			if(module_name in modules) {
				console.log("Warning: your register " + module_name + " twice");
			}
			modules[module_name] = module;
		},
		loadPlayable: function(module_name) {
			return modules[module_name];
		},
		render: function(template, context, callback, ext){
			if(!ext){
				ext="html";
			}
			dust.render(template, context, callback)
		}
	});

	window.App = App;
	window.modules = modules;
})();
