(function() {
  $.fn.zenmoji = function(options) {

    function ZenmojiView() {
      this.$el = $('<div class="zenmoji-view" style="display: none;"></div>');
      $('body').append(this.$el);
    }

    ZenmojiView.prototype.show = function(offset) {
      this.$el.css({
        left: offset.left,
        top: offset.top + offset.height
      });

      this.$el.show();
    };

    this.each(function(index, el) {
      var $el = $(el);
      $el.data('view', new ZenmojiView());

      $el.on('keydown', function(event) {
        var view   = $(this).data('view'),
            offset = $(this).caret('offset');

        view.show(offset);
      });
    });
  }
}());
