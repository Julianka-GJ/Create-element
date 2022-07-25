"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Element =
/*#__PURE__*/
function () {
  function Element(tagName, contents, attributes) {
    _classCallCheck(this, Element);

    this.tagName = tagName;
    this.contents = contents;
    this.attributes = attributes;
  }

  _createClass(Element, [{
    key: "createEl",
    value: function createEl(parent) {
      var div = document.getElementById(parent);
      var elem = document.createElement(this.tagName);
      if (!this.attributes) return elem;

      for (var _i = 0, _Object$entries = Object.entries(this.attributes); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            attr = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        elem.setAttribute(attr, value);
      }

      elem.textContent = this.contents;
      div.append(elem);
    }
  }, {
    key: "deletEl",
    value: function deletEl(attribut) {
      var deletEl = document.querySelector(attribut);
      deletEl.remove();
    }
  }, {
    key: "replacementEl",
    value: function replacementEl(newTag, oldTag) {
      var newTagEl = document.getElementById(newTag);
      var oldTagEl = document.getElementById(oldTag);
      div.replaceChild(newTagEl, oldTagEl);
    }
  }, {
    key: "cloneEl",
    value: function cloneEl(cloneTag, contents, attr) {
      var newcloneTag = document.getElementById(cloneTag);
      var cloneEl = newcloneTag.cloneNode(false);
      cloneEl.textContent = contents;
      newcloneTag.classList.add(attr);
      newcloneTag.after(cloneEl);
    }
  }]);

  return Element;
}();

var myButton = new Element('button', 'Hello word!', {
  id: "my-button",
  "class": 'color'
});
myButton.createEl('div');
myButton.cloneEl('my-button', 'I am a clone', 'clone01');
var myInput = new Element('input', '', {
  id: "my-input",
  "class": 'text-enter',
  type: 'text',
  placeholder: 'Your name'
});
myInput.createEl('div');
var mySpan = new Element('span', 'Element replacement', {
  id: "my-span",
  "class": 'text-enter'
});
mySpan.createEl('div');
mySpan.replacementEl('my-span', 'my-input');
myButton.deletEl('.clone01');