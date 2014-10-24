TrelloClone.Views.CardShow = Backbone.View.extend({
  tagName: 'li',

  template: JST['cards/show'],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function() {
    var renderedContent = this.template({
      card: this.model
    });

    this.$el.html(renderedContent);

    return this;
  },
});