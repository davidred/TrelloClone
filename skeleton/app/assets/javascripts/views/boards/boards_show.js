TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/show'],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists(), "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      board: this.model
    });

    this.$el.html(renderedContent);
    //this.$el.find('ul')
    //create Lists Index view
    var listView = new TrelloClone.Views.ListsIndex({
      collection: this.model.lists()
    });
    //append list index view to

    this.$el.find('#lists').append(listView.render().$el);
    return this;
  }
})