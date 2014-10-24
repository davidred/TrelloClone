TrelloClone.Views.ListShow = Backbone.View.extend({
  tagName: 'li',

  template: JST['lists/show'],

  initialize: function () {
    this.listenTo(this.model.cards(), "sync", this.render);
  },

  render: function() {

    var renderedContent = this.template({
      list: this.model
    });

    this.$el.html(renderedContent);
    view = this;
    //iterate over the cards
    var cards = this.model.cards();
    cards.each ( function (card) {
      var cardShowView = new TrelloClone.Views.CardShow({
        model: card
      });
      view.$el.find('.cards').append(cardShowView.render().$el);
      //view.$el.find('.cards').append('<li>hello</li>');

    });

    return this;
  },

});