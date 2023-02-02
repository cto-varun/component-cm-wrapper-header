"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ComponentCmWrapperHeaderComponent;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _icons = require("@ant-design/icons");
require("./styles.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Header
} = _antd.Layout;
function ComponentCmWrapperHeaderComponent() {
  const username = 'Admin';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "cm-wrapper-header d-flex flex-row justify-content-between align-items-center",
    style: {
      height: 48
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Space, {
    size: 16
  }, /*#__PURE__*/_react.default.createElement(_icons.MenuUnfoldOutlined, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "title"
  }, "Case Management")), /*#__PURE__*/_react.default.createElement(_antd.Input, {
    prefix: /*#__PURE__*/_react.default.createElement(_icons.SearchOutlined, null),
    placeholder: "Type search parameter (Case Id, Case Category, BAN etc.)",
    className: "search-input"
  }), /*#__PURE__*/_react.default.createElement(_antd.Space, {
    size: 36
  }, /*#__PURE__*/_react.default.createElement(_antd.Badge, {
    count: 5,
    className: "notifications-badge"
  }, /*#__PURE__*/_react.default.createElement(_icons.BellFilled, null)), /*#__PURE__*/_react.default.createElement(_antd.Dropdown, {
    menu: /*#__PURE__*/_react.default.createElement(_antd.Menu, null, /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, null, "Settings")),
    className: "account-settings"
  }, /*#__PURE__*/_react.default.createElement("div", null, username, " ", /*#__PURE__*/_react.default.createElement(_icons.DownOutlined, null)))));
}
module.exports = exports.default;