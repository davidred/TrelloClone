TrelloClone.Views.BoardNew = Backbone.View.extend({
  template: JST['boards/new'],

  initialize: function() {
    this.listenTo( this.model, "sync", this.render)
  },

  events: {
    'submit form': 'submit'
  },

  render: function() {
    var renderedContent = this.template({
      board: this.model
    })

    this.$el.html(renderedContent);

    return this;
  },

  submit: function(event) {
    event.preventDefault();

    var attrs = $(event.currentTarget).serializeJSON();

    function success (board) {
      Backbone.history.navigate("#/boards/" + board.id, { trigger: true });
    }

    this.model.set(attrs);
    if (this.model.isNew()) {
      this.collection.create(this.model, {
        success: success.bind(this.model),

        wait: true
      });
    } else {
      this.model.save({}, {
        success: success.bind(this.model)
      });
    }
  }
});