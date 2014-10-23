TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: 'api/lists',

  initialize: function (models, options) {
    this.board = options.board;
  }
});
