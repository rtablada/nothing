import Ember from 'ember';

export default Ember.View.extend({
	classNames: ['nothing'],
	click: function() {
		this.get('controller').send('changeAlert');
	}
});
