TrelloClone.Views.CardNew = Backbone.View.extend({
	template: JST['cards/new'],
	
	events: {
		"submit form" : "submit"
	},
	
	render: function() {
		var renderedContent = this.template({
			card: this.model
		});

    this.$el.html(renderedContent);
		
		return this;
	},
	
	submit: function(event) {
		var attrs = $(event.currentTarget).serializeJSON();
		debugger
		//create new card
		//add card to lists
		//on success navigate back to boards
	}
});