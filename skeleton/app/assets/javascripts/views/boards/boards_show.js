TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/show'],

  className: 'board-container',

  events: {
    "click .addList" : "addList",
    "click": "hideNewListForm"
  },

  addList: function(event) {
    event.preventDefault();
    $('.newList').removeClass('inactive');
    $(event.currentTarget).addClass('inactive');
  },

  hideNewListForm: function(event) {
    if ($(event.target).hasClass('addList')) {
      $('.newList').removeClass('inactive');
      $('.addList').addClass('inactive');
    } else {
      if ($(event.target).hasClass('newList') || $(event.target).is('input')) {

      } else {
        $('.newList').addClass('inactive');
        $('.addList').removeClass('inactive');
      }
    }
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists(), "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      board: this.model
    });
    this.$el.html(renderedContent);
    //cycle through lists
    var lists = this.model.lists()
    var view = this;
    //
    lists.each( function(list) {
      //create lists show view
      var listShowView = new TrelloClone.Views.ListShow({
        model: list
      });

      view.$el.find('.lists').append(listShowView.render().$el);

    });

    var newList = new TrelloClone.Models.List([], { board: this.model});
    var listNewView = new TrelloClone.Views.ListNew({
      model: newList
    });

    this.$el.find('.lists').append(listNewView.render().$el);
    this.$el.find('.lists').append('<li class="addList"><a class="addList" href="#">Add a list...</a></li>')
    return this;

  },
});
