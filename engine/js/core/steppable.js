(function(){
  'use strict';
  function Steppable(fun, scope, loop){
    this.scope = scope;
    this.current = 0;
    this.steps = [];
    this.loop = loop||false;
    fun.call(this);
  }

  Steppable.prototype.step = function(fun){
    this.steps.push(fun);
  };

  Steppable.prototype.next = function(){
    this.steps[this.current].call(this.scope);
    this.current++;
    if(this.loop && this.current === this.steps.length){
      this.current = 0;
    }
  };

  Steppable.prototype.hasNextStep = function(){
    return this.current !== (this.steps.length-1);
  };

  Steppable.prototype.reset = function(){
    this.current = 0;
  };

  window.Steppable = Steppable;
})();