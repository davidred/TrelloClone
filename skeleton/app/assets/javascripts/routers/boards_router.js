TrelloClone.Routers.Boards = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'index',
    'boards/new': 'new',
    'boards/:id': 'show',
    'boards/:id/edit': 'edit'
  },

  index: function() {
    TrelloClone.boards.fetch();

    var indexView = new TrelloClone.Views.BoardsIndex({
      collection: TrelloClone.boards
    });

    indexView.render();

    this._swapView(indexView);
  },

  show: function(id) {
    var model = TrelloClone.boards.getOrFetch(id);
    var showView = new TrelloClone.Views.BoardShow({
      model: model
    })

    this._swapView(showView);
  },

  new: function() {
    var newBoard = new TrelloClone.Models.Board();

    var newBoardView = new TrelloClone.Views.BoardNew({
      collection: TrelloClone.boards,
      model: newBoard
    });

    this._swapView(newBoardView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});