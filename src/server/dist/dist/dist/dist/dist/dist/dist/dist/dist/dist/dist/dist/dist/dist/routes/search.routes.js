"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _axios = _interopRequireDefault(require("axios"));

// Requests will reach these routes already matching /api/search
var SearchRouter = _express["default"].Router();
_dotenv["default"].config();
var GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes?q=";
var API_KEY = process.env.GOOGLE_BOOKS_API_KEY;
SearchRouter.get("/:query", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var query, response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          query = req.params.query;
          _context.next = 4;
          return _axios["default"].get("".concat(GOOGLE_BOOKS_API).concat(query, "&key=").concat(API_KEY));
        case 4:
          response = _context.sent;
          res.json(response.data);
          _context.next = 12;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error("Error fetching data from Google Books API:", _context.t0);
          next(_context.t0);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
var _default = exports["default"] = SearchRouter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX3JlZ2VuZXJhdG9yIiwiX2FzeW5jVG9HZW5lcmF0b3IyIiwiX2V4cHJlc3MiLCJfZG90ZW52IiwiX2F4aW9zIiwiU2VhcmNoUm91dGVyIiwiUm91dGVyIiwiY29uZmlnIiwiR09PR0xFX0JPT0tTX0FQSSIsIkFQSV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0JPT0tTX0FQSV9LRVkiLCJnZXQiLCJfcmVmIiwibWFyayIsIl9jYWxsZWUiLCJyZXEiLCJyZXMiLCJuZXh0IiwicXVlcnkiLCJyZXNwb25zZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsInBhcmFtcyIsImNvbmNhdCIsInNlbnQiLCJqc29uIiwiZGF0YSIsInQwIiwiY29uc29sZSIsImVycm9yIiwic3RvcCIsIl94IiwiX3gyIiwiX3gzIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uL3JvdXRlcy9zZWFyY2gucm91dGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfcmVnZW5lcmF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKSk7XG52YXIgX2FzeW5jVG9HZW5lcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpKTtcbnZhciBfZXhwcmVzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImV4cHJlc3NcIikpO1xudmFyIF9kb3RlbnYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJkb3RlbnZcIikpO1xudmFyIF9heGlvcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImF4aW9zXCIpKTtcblxuLy8gUmVxdWVzdHMgd2lsbCByZWFjaCB0aGVzZSByb3V0ZXMgYWxyZWFkeSBtYXRjaGluZyAvYXBpL3NlYXJjaFxudmFyIFNlYXJjaFJvdXRlciA9IF9leHByZXNzW1wiZGVmYXVsdFwiXS5Sb3V0ZXIoKTtcbl9kb3RlbnZbXCJkZWZhdWx0XCJdLmNvbmZpZygpO1xudmFyIEdPT0dMRV9CT09LU19BUEkgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Jvb2tzL3YxL3ZvbHVtZXM/cT1cIjtcbnZhciBBUElfS0VZID0gcHJvY2Vzcy5lbnYuR09PR0xFX0JPT0tTX0FQSV9LRVk7XG5TZWFyY2hSb3V0ZXIuZ2V0KFwiLzpxdWVyeVwiLCAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKSgvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUocmVxLCByZXMsIG5leHQpIHtcbiAgICB2YXIgcXVlcnksIHJlc3BvbnNlO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMDtcbiAgICAgICAgICBxdWVyeSA9IHJlcS5wYXJhbXMucXVlcnk7XG4gICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQ7XG4gICAgICAgICAgcmV0dXJuIF9heGlvc1tcImRlZmF1bHRcIl0uZ2V0KFwiXCIuY29uY2F0KEdPT0dMRV9CT09LU19BUEkpLmNvbmNhdChxdWVyeSwgXCIma2V5PVwiKS5jb25jYXQoQVBJX0tFWSkpO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgcmVzcG9uc2UgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgIHJlcy5qc29uKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIF9jb250ZXh0LnByZXYgPSA4O1xuICAgICAgICAgIF9jb250ZXh0LnQwID0gX2NvbnRleHRbXCJjYXRjaFwiXSgwKTtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YSBmcm9tIEdvb2dsZSBCb29rcyBBUEk6XCIsIF9jb250ZXh0LnQwKTtcbiAgICAgICAgICBuZXh0KF9jb250ZXh0LnQwKTtcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZSwgbnVsbCwgW1swLCA4XV0pO1xuICB9KSk7XG4gIHJldHVybiBmdW5jdGlvbiAoX3gsIF94MiwgX3gzKSB7XG4gICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IFNlYXJjaFJvdXRlcjsiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7O0FBRVosSUFBSUEsc0JBQXNCLEdBQUdDLE9BQU8sQ0FBQyw4Q0FBOEMsQ0FBQztBQUNwRkMsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBRSxZQUFZLEVBQUU7RUFDM0NDLEtBQUssRUFBRTtBQUNULENBQUMsQ0FBQztBQUNGRCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQzNCLElBQUlFLFlBQVksR0FBR04sc0JBQXNCLENBQUNDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBQ2hGLElBQUlNLGtCQUFrQixHQUFHUCxzQkFBc0IsQ0FBQ0MsT0FBTyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7QUFDbkcsSUFBSU8sUUFBUSxHQUFHUixzQkFBc0IsQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3pELElBQUlRLE9BQU8sR0FBR1Qsc0JBQXNCLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN2RCxJQUFJUyxNQUFNLEdBQUdWLHNCQUFzQixDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXJEO0FBQ0EsSUFBSVUsWUFBWSxHQUFHSCxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUNJLE1BQU0sQ0FBQyxDQUFDO0FBQy9DSCxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUNJLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLElBQUlDLGdCQUFnQixHQUFHLGdEQUFnRDtBQUN2RSxJQUFJQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxvQkFBb0I7QUFDOUNQLFlBQVksQ0FBQ1EsR0FBRyxDQUFDLFNBQVMsRUFBRSxhQUFhLFlBQVk7RUFDbkQsSUFBSUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFYixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxhQUFhRCxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUNlLElBQUksQ0FBQyxTQUFTQyxPQUFPQSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFO0lBQ3ZILElBQUlDLEtBQUssRUFBRUMsUUFBUTtJQUNuQixPQUFPckIsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDc0IsSUFBSSxDQUFDLFNBQVNDLFFBQVFBLENBQUNDLFFBQVEsRUFBRTtNQUM5RCxPQUFPLENBQUMsRUFBRSxRQUFRQSxRQUFRLENBQUNDLElBQUksR0FBR0QsUUFBUSxDQUFDTCxJQUFJO1FBQzdDLEtBQUssQ0FBQztVQUNKSyxRQUFRLENBQUNDLElBQUksR0FBRyxDQUFDO1VBQ2pCTCxLQUFLLEdBQUdILEdBQUcsQ0FBQ1MsTUFBTSxDQUFDTixLQUFLO1VBQ3hCSSxRQUFRLENBQUNMLElBQUksR0FBRyxDQUFDO1VBQ2pCLE9BQU9mLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQ1MsR0FBRyxDQUFDLEVBQUUsQ0FBQ2MsTUFBTSxDQUFDbkIsZ0JBQWdCLENBQUMsQ0FBQ21CLE1BQU0sQ0FBQ1AsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDTyxNQUFNLENBQUNsQixPQUFPLENBQUMsQ0FBQztRQUNsRyxLQUFLLENBQUM7VUFDSlksUUFBUSxHQUFHRyxRQUFRLENBQUNJLElBQUk7VUFDeEJWLEdBQUcsQ0FBQ1csSUFBSSxDQUFDUixRQUFRLENBQUNTLElBQUksQ0FBQztVQUN2Qk4sUUFBUSxDQUFDTCxJQUFJLEdBQUcsRUFBRTtVQUNsQjtRQUNGLEtBQUssQ0FBQztVQUNKSyxRQUFRLENBQUNDLElBQUksR0FBRyxDQUFDO1VBQ2pCRCxRQUFRLENBQUNPLEVBQUUsR0FBR1AsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUNsQ1EsT0FBTyxDQUFDQyxLQUFLLENBQUMsNENBQTRDLEVBQUVULFFBQVEsQ0FBQ08sRUFBRSxDQUFDO1VBQ3hFWixJQUFJLENBQUNLLFFBQVEsQ0FBQ08sRUFBRSxDQUFDO1FBQ25CLEtBQUssRUFBRTtRQUNQLEtBQUssS0FBSztVQUNSLE9BQU9QLFFBQVEsQ0FBQ1UsSUFBSSxDQUFDLENBQUM7TUFDMUI7SUFDRixDQUFDLEVBQUVsQixPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUM3QixDQUFDLENBQUMsQ0FBQztFQUNILE9BQU8sVUFBVW1CLEVBQUUsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDN0IsT0FBT3ZCLElBQUksQ0FBQ3dCLEtBQUssQ0FBQyxJQUFJLEVBQUVDLFNBQVMsQ0FBQztFQUNwQyxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNKLElBQUlDLFFBQVEsR0FBRzFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBR08sWUFBWSIsImlnbm9yZUxpc3QiOltdfQ==