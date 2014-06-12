(function(){
  'use strict';
  var CollectionPlayer, PlayableCollection;
  CollectionPlayer = Playable.extend({
    defaults: {
      path_or_json: null,
      collection: null,
      collection_name: 'collection'
    },
    initialize: function(){
      Playable.prototype.initialize.apply(this, arguments);
    },
    collection_name: function(){
      return this.get("collection_name");
    },
    initializeCollection: function(){
      this.set(this.collection_name(),
        new PlayableCollection()
      );
    },
    play: function(loop){
      var that=this;
      this.steps = new Steppable(function(){
        that.get(that.collection_name()).forEach(function(playalbe){
          this.step(function(){
            playalbe.play();
          });
        }, this);
        that.get("parent") && this.step(function(){
          that.get("parent").next();
        });
      }, this, loop)
      this.steps.next();
    },
    next: function(){
      this.steps.next();
    },
    buildFromJSON: function(data){
      this.set('data', data);
      this.buildPlayableCollection(data[this.collection_name()]);
    },
    buildPlayableCollection: function(modules){
      var that=this, Module;
      this.play_collection = this.get(this.collection_name());
      modules.forEach(function(item){
        Module = App.loadPlayable(item.module);
        that.play_collection.add(
          new Module({
            path_or_json:(item.path||item.settings),
            parent: that
          })
        );
      });
    }
  });

  PlayableCollection = Backbone.Collection.extend({
    model: Playable
  });
  window.CollectionPlayer = CollectionPlayer;
  window.PlayableCollection = PlayableCollection;
})();