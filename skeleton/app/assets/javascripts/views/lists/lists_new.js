TrelloClone.Views.ListNew = Backbone.View.extend({
  tagName: 'li',

  className: 'newList inactive',

  template: JST['lists/new'],

  events: {
    "submit form": "submit",
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {

    var renderedContent = this.template({
      list: this.model
    });

    this.$el.html(renderedContent);

    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var view = this;

    var attrs = $(event.currentTarget).serializeJSON();
    attrs.list.board_id = this.model.board.id;

    var list = new TrelloClone.Models.List(attrs, {board: this.model.board});
    list.save({}, {
      success: function () {
        Backbone.history.navigate("#/boards/"+view.model.board.id, {
          trigger: true });
      },
    });
  }

});