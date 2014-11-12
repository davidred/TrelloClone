TrelloClone.Views.ListShow = Backbone.View.extend({
  tagName: 'li',

  template: JST['lists/show'],

  events: {
    "click .add-card" : "addCard",
    "click .hide-card-from": "hideCardForm",
  },

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

    });

    view.$el.find('.cards').append('<li class="add-card" data-list="'+this.model.id+'">Add Card</li>');

    var newCard = new TrelloClone.Models.Card({
      list: this.model
    });


    var newCardView = new TrelloClone.Views.CardNew({
      model: newCard
    })

    view.$el.find('.cards').append(newCardView.render().$el);

    return this;
  },

  addCard: function(event) {
    event.preventDefault();
    $(event.currentTarget).next('li').removeClass('inactive');
  }

  // addList: function(event) {
  //   event.preventDefault();
  //   $('.newList').removeClass('inactive');
  //   $(event.currentTarget).addClass('inactive');
  // },

});
