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
    //cycle through lists
    var lists = this.model.lists()
    var view = this;
    //
    lists.each( function(list) {
      //create lists show view
      var listShowView = new TrelloClone.Views.ListShow({
        model: list
      });

      view.$el.find('#lists').append(listShowView.render().$el);

    });

    //append new list view
    // var newList = new TrelloClone.Models.List([], { board: board });
 //    var newListView = new TrelloClone.Views.ListNew({
 //      model: newList
 //    });
    var newList = new TrelloClone.Models.List([], { board: this.model});
    var listNewView = new TrelloClone.Views.ListNew({
      model: newList
    });

    this.$el.find('#lists').append(listNewView.render().$el);
    this.$el.find('#lists').append('<li id="addList"><a href="#/boards/'+this.model.id+'/lists/new">Add a list...</a></li>')
    return this;

  }
});


    //create Lists Index view
    // var listView = new TrelloClone.Views.ListsIndex({
    //   collection: this.model.lists()
    // });
    // //append list index view to
    // this.$el.find('#lists').append(listView.render().$el);
    // return this;

