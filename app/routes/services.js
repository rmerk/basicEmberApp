import Ember from 'ember'

export default Ember.Route.extend({
  model: function(){
    return ['PC Repair', 'Networks Stuff', 'Home Audio'];
  }
});
