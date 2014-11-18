TrelloClone.Models.Card = Backbone.Model.extend({
	urlRoot: "/api/cards",

	initialize: function(options) {
		this.list = options.list;
	},
})
