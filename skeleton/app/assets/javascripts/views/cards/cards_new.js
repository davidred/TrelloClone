TrelloClone.Views.CardNew = Backbone.View.extend({
	template: JST['cards/new'],

	events: {
		"submit form" : "submit"
	},

	render: function() {
		debugger
		var renderedContent = this.template({
			card: this.model

		});

    this.$el.html(renderedContent);

		return this;
	},

	submit: function(event) {
		var attrs = $(event.currentTarget).serializeJSON();
		attrs.card.list_id = this.model.list.id;

		var card = new TrelloClone.Models.Card(attrs, {list: this.model.list});
		card.save({}, {
			success: function (card) {
				card.list.cards().add(card);
			},
		});
	}
});
