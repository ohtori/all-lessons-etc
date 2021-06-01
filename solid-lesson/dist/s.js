"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Single responsibility principle
var News = /*#__PURE__*/function () {
  function News(title, text) {
    _classCallCheck(this, News);

    this.title = title;
    this.text = text;
    this.modify = false;
  }

  _createClass(News, [{
    key: "update",
    value: function update(text) {
      this.text = text;
      this.modify = true;
    }
  }]);

  return News;
}();

var news = new News('Рекордная жара', 'Побиты рекорды температуры');
console.log(news);