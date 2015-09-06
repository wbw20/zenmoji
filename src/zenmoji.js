(function() {
  $.fn.zenmoji = function(options) {

    function ZenmojiView() {
      this.$el = $('<div class="zenmoji-view" style="display: none;">' +
                     '<div class="content">' +
                       '<input type="text">' +
                       '<div class="emojis">' +
                         '🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴' +
                       '</div>' +
                       '<div class="emojis">' +
                         '🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴' +
                       '</div>' +
                       '<div class="emojis">' +
                         '🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴' +
                       '</div>' +
                       '<div class="emojis">' +
                         '🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴' +
                       '</div>' +
                     '</div>' +
                   '</div>');
      $('body').append(this.$el);
    }

    ZenmojiView.prototype.show = function(offset) {
      this.$el.css({
        left: offset.left,
        top: offset.top + offset.height
      });

      this.$el.show();
    };

    ZenmojiView.prototype.hide = function() {
      this.$el.hide();
    };

    function getToken(textarea, position) {
      var text = textarea.val().slice(0, position);
      var matches = /\:[A-Za-z]*$/.exec(text);

      return matches;
    }

    this.each(function(index, el) {
      var $el = $(el);
      $el.data('view', new ZenmojiView());

      $el.on('keyup', function(event) {
        var view     = $(this).data('view'),
            position = $(this).caret('pos'),
            offset   = $(this).caret('offset'),
            token    = getToken($(this), position);

        if (token) {
          view.show(offset);
        } else {
          view.hide(offset);
        }
      });
    });
  }
}());
