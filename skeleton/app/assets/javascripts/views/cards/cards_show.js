TrelloClone.Views.CardShow = Backbone.View.extend({
  tagName: 'li',

  template: JST['cards/show'],

  events: {
    "click div.delete-card": "deleteCard"
  },

  initialize: function(options) {
    this.list = options.list;

    this.listenTo(this.model, "sync remove add", this.render)
  },

  render: function() {
    var renderedContent = this.template({
      card: this.model
    });

    this.$el.html(renderedContent);

    return this;
  },

  deleteCard: function(event) {
    var view = this;
    $.ajax({
      type: 'delete',
      url: '/api/cards/'+this.model.id,
      success: function(card) {
        debugger
        // this.list.fetch();

        console.log(card);
      }.bind(this)
    });
  }
});
