TrelloClone.Routers.Boards = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'index',
    'boards/new': 'newBoard',
    'boards/:id': 'show',
    'boards/:id/edit': 'edit',
    'boards/:id/lists/new': 'newList',
		'boards/:id/lists/:id/cards/new': 'newCard'
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

  newBoard: function() {
    var newBoard = new TrelloClone.Models.Board();

    var newBoardView = new TrelloClone.Views.BoardNew({
      collection: TrelloClone.boards,
      model: newBoard
    });

    this._swapView(newBoardView);
  },

  newList: function(id) {

    var board = TrelloClone.boards.getOrFetch(id);
    var newList = new TrelloClone.Models.List({}, { board: board });
    var newListView = new TrelloClone.Views.ListNew({
      model: newList
    });
    this._swapView(newListView);
  },

	newCard: function(idBoard, idList) {
		var board = TrelloClone.boards.getOrFetch(idBoard);
		var lists = new TrelloClone.Collections.Lists({}, { board: board});
		var list = lists.get(idList);
		var newCard = new TrelloClone.Models.Card({}, { list: list });
		var newCardView = new TrelloClone.Views.CardNew({
			model: newCard
		});

		this._swapView(newCardView);

	},

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
