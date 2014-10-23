TrelloClone.Collections.Lists = Backbone.Collection.extend({
  model: TrelloClone.Models.List,

  url: function() {
    return this.board.url() + "/lists";
  },

  initialize: function (models, options) {
    this.board = options.board;
  }

});
