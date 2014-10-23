TrelloClone.Collections.Boards = Backbone.Collection.extend({
  url: 'api/boards',

  model: TrelloClone.Models.Board,

  getOrFetch: function(id) {
    var model = this.get(id),
      boards = this;

    if(model) {
      model.fetch();
    } else {
      var model = new TrelloClone.Models.Board({id: id});
      model.fetch({
        success: function() {

          boards.add(model);
        },
      });
    }

    return model;
  },

});
