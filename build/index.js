"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.set("port", 1000);
app.listen(app.get("port"));
console.log("Server listen on port:", app.get('port'));