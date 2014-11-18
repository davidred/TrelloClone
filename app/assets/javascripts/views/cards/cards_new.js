TrelloClone.Views.CardNew = Backbone.View.extend({
	tagName: 'li',

	className: 'new-card-form inactive',

	template: JST['cards/new'],

	events: {
		"submit form" : "submit",
		"click button.cancel": "cancel",
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
		attrs.card.list_id = this.model.list.id;
		var view=this;
		var card = new TrelloClone.Models.Card(attrs, {list: this.model.list});
		card.save(attrs, {
			success: function (card) {
				view.model.cards().add(card);
			},
		});
	},

	cancel: function(event) {
		event.preventDefault();
		$(event.currentTarget).parent().parent().addClass('inactive')
	},
});
