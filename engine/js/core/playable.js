(function(){
  'use strict';
  var Playable, PlayableCollection;
  Playable = Backbone.Model.extend({
    defaults: {
      path_or_json: null
    },
    initialize: function(){
      if(!this.get("path_or_json")) {
        throw "Play path must be defined";
      }
      this.initializeCollection();
      this.build();
    },
    initializeCollection: function(){
      // Empty for single
    },
    play: function(){
      throw "Not implemented";
    },
    build: function(){
      this.readFromJSON();
    },
    readFromJSON: function(){
      var that=this,
          path_or_json=this.get("path_or_json");
      if(typeof(path_or_json)==="string"){
        $.getJSON(path_or_json, function(data){
          that.buildFromJSON(data);
        });
      } else {
        that.buildFromJSON(path_or_json);
      }
    },
    buildFromJSON: function(data){
      throw "Not implemented";
    }
  });

  window.Playable = Playable;
})();