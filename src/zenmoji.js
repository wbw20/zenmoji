(function() {
  var rows        = 8;
  var people      = ['😀', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😈', '👿', '😉', '😊', '☺️', '😋', '😌', '😍', '😎', '😏', '😐', '😑', '😒', '😓', '😔', '😕', '😖', '😗', '😘', '😙', '😚', '😛', '😜', '😝', '😞', '😟', '😠', '😡', '😢', '😣', '😤', '😥', '😦', '😧', '😨', '😩', '😪', '😫', '😬', '😭', '😮', '😯', '😰', '😱', '😲', '😳', '😴', '😵', '😶', '😷', '😸', '😹', '😺', '😻', '😼', '😽', '😾', '😿', '🙀', '👣', '👤', '👥', '👶', '👦', '👧', '👨', '👩', '👪', /*'👨‍👩‍👧', '👨‍👩‍👦‍👦', '👨‍👩‍👧‍👧', '👨‍👩‍👧‍👧', '👩‍👩‍👦', '👩‍👩‍👧', '👩‍👩‍👧‍👦', '👩‍👩‍👦‍👦', '👩‍👩‍👧‍👧', '👨‍👨‍👦', '👨‍👨‍👧', '👨‍👨‍👧‍👦', '👨‍👨‍👦‍👦', '👨‍👨‍👧‍👧',*/ '👫', '👬', '👭', '👯', '👰', '👱', '👲', '👳', '👴', '👵', '👮', '👷', '👸', '💂', '👼', '🎅', '👻', '👹', '👺', '💩', '💀', '👽', '👾', '🙇', '💁', '🙅', '🙆', '🙋', '🙎', '🙍', '💆', '💇', '💑', /*'👩‍❤️‍👩', '👨‍❤️‍👨', '💏', '👩‍❤️‍💋‍👩', '👨‍❤️‍💋‍👨',*/ '🙌', '👏', '👂', '👀', '👃', '👄', '💋', '👅', '💅', '👋', '👍', '👎', '☝️', '👆', '👇', '👈', '👉', '👌', '✌️', '👊', '✊', '✋', '💪', '👐', '🙏'];
  var nature      = ['🌱', '🌲', '🌳', '🌴', '🌵', '🌷', '🌸', '🌹', '🌺', '🌻', '🌼', '💐', '🌾', '🌿', '🍀', '🍁', '🍂', '🍃', '🍄', '🌰', '🐀', '🐁', '🐭', '🐹', '🐂', '🐃', '🐄', '🐮', '🐅', '🐆', '🐯', '🐇', '🐰', '🐈', '🐱', '🐎', '🐴', '🐏', '🐑', '🐐', '🐓', '🐔', '🐤', '🐣', '🐥', '🐦', '🐧', '🐘', '🐪', '🐫', '🐗', '🐖', '🐷', '🐽', '🐕', '🐩', '🐶', '🐺', '🐻', '🐨', '🐼', '🐵', '🙈', '🙉', '🙊', '🐒', '🐉', '🐲', '🐊', '🐍', '🐢', '🐸', '🐋', '🐳', '🐬', '🐙', '🐟', '🐠', '🐡', '🐚', '🐌', '🐛', '🐜', '🐝', '🐞', '🐾', '⚡', '🔥', '🌙', '☀️', '⛅️', '☁️', '💧', '💦', '☔️', '💨', '❄️', '🌟', '⭐️', '🌠', '🌄', '🌅', '🌈', '🌊', '🌋', '🌌', '🗻', '🗾', '🌐', '🌍', '🌎', '🌏', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌚', '🌝', '🌛', '🌜', '🌞'];
  var food        = ['🍅', '🍆', '🌽', '🍠', '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🍔', '🍕', '🍖', '🍗', '🍘', '🍙', '🍚', '🍛', '🍜', '🍝', '🍞', '🍟', '🍡', '🍢', '🍣', '🍤', '🍥', '🍦', '🍧', '🍨', '🍩', '🍪', '🍫', '🍬', '🍭', '🍮', '🍯', '🍰', '🍱', '🍲', '🍳', '🍴', '🍵', '☕️', '🍶', '🍷', '🍸', '🍹', '🍺', '🍻', '🍼'];
  var celebration = ['🎀', '🎁', '🎂', '🎃', '🎄', '🎋', '🎍', '🎑', '🎆', '🎇', '🎉', '🎊', '🎈', '💫', '✨', '💥', '🎓', '👑', '🎎', '🎏', '🎐', '🎌', '🏮', '💍', '❤️', '💔', '💌', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '💜', '💛', '💚', '💙'];
  var activity    = ['🏃', '🚶', '💃', '🚣', '🏊', '🏄', '🛀', '🏂', '🎿', '⛄️', '🚴', '🚵', '🏇', '⛺️', '🎣', '⚽️', '🏀', '🏈', '⚾️', '🎾', '🏉', '⛳️', '🏆', '🎽', '🏁', '🎹', '🎸', '🎻', '🎷', '🎺', '🎵', '🎶', '🎼', '🎧', '🎤', '🎭', '🎫', '🎩', '🎪', '🎬', '🎨', '🎯', '🎱', '🎳', '🎰', '🎲', '🎮', '🎴', '🃏', '🀄️', '🎠', '🎡', '🎢'];
  var travel      = ['🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴'];
  var symbols     = ['🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴', '🌴'];

  var keyMap = {
    ESC: 27,
    TAB: 9,
    ENTER: 13
  };

  $.fn.zenmoji = function(options) {

    function buildTemplate(list) {
      var template = '<table class="emojis"><tbody>';

      for (var i = 0; i < list.length; i++) {
        template += '<tr>';

        for (var j = 0; j < 8 && i < list.length; j++) {
          template += '<td class="emoji">' + list[i] + '</td>';
          i++;
        }

        template += '</tr>';
      }

      return template + '</tbody></table>';
    }

    function ZenmojiView(options) {
      this.$el = $('<div class="zenmoji-view" style="display: none;">' +
                     '<div class="content">' +
                       '<input type="text">' +
                         buildTemplate(people) +
                         buildTemplate(nature) +
                         buildTemplate(food) +
                         buildTemplate(celebration) +
                         buildTemplate(activity) +
                         buildTemplate(travel) +
                         buildTemplate(symbols) +
                     '</div>' +
                   '</div>');

      /* If the top two handlers fire, the bottom does not */
      this.$el.on('click', '.emojis td', options.select);
      this.$el.on('click', 'input', function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
      });
      this.$el.on('click', this.hide.bind(this));

      this.$el.on('selected', this.hide.bind(this));
      $('body').append(this.$el);
    }

    ZenmojiView.prototype.show = function(offset) {
      this.$el.css({
        left: offset.left,
        top: offset.top + offset.height
      });

      this.$el.show();
      this.$el.scrollTop(32);
    };

    ZenmojiView.prototype.hide = function() {
      this.$el.hide();
    };

    ZenmojiView.prototype.isHovered = function() {
      return this.$el.is(':hover');
    };

    function getToken(textarea, position) {
      var text = textarea.val().slice(0, position);
      var matches = /\:[A-Za-z]*$/.exec(text);

      return matches;
    }

    this.each(function(index, el) {
      var $el = $(el);

      $el.data('view', new ZenmojiView({
        select: function(event) {
          var emoji    = $(event.target).text(),
              text     = $el.val(),
              position = $el.caret('pos');

          $el.val(text.slice(0, position - 1) + emoji + text.slice(position));
          $(event.target).trigger('selected');
          $el.focus();
          $el.caret('pos', position);

          event.preventDefault();
          event.stopImmediatePropagation();
        }
      }));

      $el.on('keyup click', function(event) {
        var view     = $(this).data('view'),
            position = $(this).caret('pos'),
            offset   = $(this).caret('offset'),
            token    = getToken($(this), position);

        if (!token || event.which == keyMap.ESC) {
          view.hide();
        } else {
          view.show(offset);
        }
      });

      $el.on('blur', function() {
        var view = $(this).data('view');

        if (!view.isHovered()) {
          view.hide();
        }
      });
    });
  }
}());
