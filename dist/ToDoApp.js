"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ToDoList = _interopRequireDefault(require("./ToDoList"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // src/ToDoApp.js
var ToDoApp = /*#__PURE__*/function (_Component) {
  function ToDoApp(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ToDoApp);
    _this = _callSuper(this, ToDoApp, [props]);
    (0, _defineProperty2["default"])(_this, "handleChange", function (e) {
      _this.setState({
        currentItem: e.target.value
      });
    });
    (0, _defineProperty2["default"])(_this, "handleSubmit", function (e) {
      e.preventDefault();
      var newItem = {
        text: _this.state.currentItem,
        id: Date.now()
      };
      _this.setState(function (state) {
        return {
          items: state.items.concat(newItem),
          currentItem: ''
        };
      });
    });
    (0, _defineProperty2["default"])(_this, "handleDelete", function (id) {
      _this.setState(function (state) {
        return {
          items: state.items.filter(function (item) {
            return item.id !== id;
          })
        };
      });
    });
    _this.state = {
      items: [],
      currentItem: ''
    };
    return _this;
  }
  (0, _inherits2["default"])(ToDoApp, _Component);
  return (0, _createClass2["default"])(ToDoApp, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "todo-app"
      }, /*#__PURE__*/_react["default"].createElement("h1", null, "To-Do List"), /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        placeholder: "Enter a new task",
        value: this.state.currentItem,
        onChange: this.handleChange
      }), /*#__PURE__*/_react["default"].createElement("button", {
        type: "submit"
      }, "Add")), /*#__PURE__*/_react["default"].createElement(_ToDoList["default"], {
        items: this.state.items,
        handleDelete: this.handleDelete
      }));
    }
  }]);
}(_react.Component);
ToDoApp.propTypes = {
  items: _propTypes["default"].array,
  currentItem: _propTypes["default"].string,
  handleChange: _propTypes["default"].func,
  handleSubmit: _propTypes["default"].func,
  handleDelete: _propTypes["default"].func
};
var _default = exports["default"] = ToDoApp;