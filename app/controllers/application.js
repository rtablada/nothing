import Ember from 'ember';

export default Ember.ArrayController.extend({
	alert: null,
	actions: {
		changeAlert: function() {
			var items = this.get('model');

			var rand = items[Math.floor(Math.random()*items.length)];

			this.set('alert', rand);
		}
	}
});
