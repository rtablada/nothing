import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return [
			"What did you expect?",
			"Seriously this does nothing.",
			"You are wasting your time now.",
			"Are you really still trying this?",
			"YO!\nJust kidding."
		];
	}
});
