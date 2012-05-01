define([ 'use!backbone', 'use!underscore', 'jquery' ], function(Backbone, _, $) {
  describe("a Backbone view", function() {
    var tpl, model, view;

    beforeEach(function() {
      tpl = '<div id="my-view"><%= greeting %></div>';
      model = new Backbone.Model({
        greeting : 'Hello, world'
      });

      if (view && view.remove) {
        view.remove();
      }
    });

    it("you should be able to render a view using a template", function() {
      var MyView = Backbone.View.extend({
        template : tpl,
        render : function() {
          this.$el.html(_.template(this.template)(this.model.toJSON()));
          return this;
        }
      });

      view = new MyView({
        model : model
      }).render();

      $("body").append(view.$el);

      expect(document.getElementById('my-view')).to.be.ok();
      expect(document.getElementById('my-view').innerHTML).to.contain('Hello, world');

      view.remove();

    });

    it("you should be able to update the view when the model changes", function() {
      var MyView = Backbone.View.extend({
        initialize : function() {
          this.model.on("change:greeting", this.render, this);
        },
        template : tpl,
        render : function() {
          this.$el.html(_.template(this.template)(this.model.toJSON()));
          return this;
        }
      });

      view = new MyView({
        model : model
      }).render();

      $("body").append(view.$el);

      model.set('greeting', 'Goodbye, world');

      expect(document.getElementById('my-view').innerHTML).to.contain('Goodbye, world');
      expect(document.getElementById('my-view').innerHTML).not.to.contain('Hello, world');

      view.remove();
    });

  });

});
