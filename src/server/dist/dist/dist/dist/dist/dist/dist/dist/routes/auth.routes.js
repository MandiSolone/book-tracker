"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = _interopRequireDefault(require("express"));
var _passport = _interopRequireDefault(require("passport")); // Using Google OAuth to sign in 
// Used Passport Library - middleware for handling authentication
var AuthRouter = _express["default"].Router();
var redirectUrl = process.env.CLIENT_URL || 'http://localhost:3000/'; // Use the environment variable

// Redirect to Google for authentication
AuthRouter.get('/google', _passport["default"].authenticate('google', {
  scope: ['profile', 'email']
  // prompt: 'select_account' // This will prompt the user to select an account each time they sign in 
}));

// Callback route for Google to redirect to
AuthRouter.get('/google/callback', _passport["default"].authenticate('google', {
  failureRedirect: '/'
}), /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          res.redirect(redirectUrl);
        // Redirect to the account/home page (Client side) after auth
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// User profile route
AuthRouter.get('/profile', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (req.isAuthenticated()) {
            res.json(req.user); // Return the authenticated user
          } else {
            res.status(401).json({
              message: 'User not authenticated'
            });
          }
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

// Logout endpoint
AuthRouter.post('/logout', function (req, res) {
  req.logout(function (err) {
    if (err) return next(err);
    req.session = null; // Clear session data
    res.redirect('/loggedout'); // Redirect after logout
  });
});
var _default = exports["default"] = AuthRouter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX3JlZ2VuZXJhdG9yIiwiX2FzeW5jVG9HZW5lcmF0b3IyIiwiX2V4cHJlc3MiLCJfcGFzc3BvcnQiLCJBdXRoUm91dGVyIiwiUm91dGVyIiwicmVkaXJlY3RVcmwiLCJwcm9jZXNzIiwiZW52IiwiQ0xJRU5UX1VSTCIsImdldCIsImF1dGhlbnRpY2F0ZSIsInNjb3BlIiwiZmFpbHVyZVJlZGlyZWN0IiwiX3JlZiIsIm1hcmsiLCJfY2FsbGVlIiwicmVxIiwicmVzIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsInJlZGlyZWN0Iiwic3RvcCIsIl94IiwiX3gyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfcmVmMiIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiaXNBdXRoZW50aWNhdGVkIiwianNvbiIsInVzZXIiLCJzdGF0dXMiLCJtZXNzYWdlIiwiX3gzIiwiX3g0IiwicG9zdCIsImxvZ291dCIsImVyciIsInNlc3Npb24iLCJfZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uL3JvdXRlcy9hdXRoLnJvdXRlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX3JlZ2VuZXJhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIikpO1xudmFyIF9hc3luY1RvR2VuZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKSk7XG52YXIgX2V4cHJlc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJleHByZXNzXCIpKTtcbnZhciBfcGFzc3BvcnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwYXNzcG9ydFwiKSk7IC8vIFVzaW5nIEdvb2dsZSBPQXV0aCB0byBzaWduIGluIFxuLy8gVXNlZCBQYXNzcG9ydCBMaWJyYXJ5IC0gbWlkZGxld2FyZSBmb3IgaGFuZGxpbmcgYXV0aGVudGljYXRpb25cbnZhciBBdXRoUm91dGVyID0gX2V4cHJlc3NbXCJkZWZhdWx0XCJdLlJvdXRlcigpO1xudmFyIHJlZGlyZWN0VXJsID0gcHJvY2Vzcy5lbnYuQ0xJRU5UX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDozMDAwLyc7IC8vIFVzZSB0aGUgZW52aXJvbm1lbnQgdmFyaWFibGVcblxuLy8gUmVkaXJlY3QgdG8gR29vZ2xlIGZvciBhdXRoZW50aWNhdGlvblxuQXV0aFJvdXRlci5nZXQoJy9nb29nbGUnLCBfcGFzc3BvcnRbXCJkZWZhdWx0XCJdLmF1dGhlbnRpY2F0ZSgnZ29vZ2xlJywge1xuICBzY29wZTogWydwcm9maWxlJywgJ2VtYWlsJ11cbiAgLy8gcHJvbXB0OiAnc2VsZWN0X2FjY291bnQnIC8vIFRoaXMgd2lsbCBwcm9tcHQgdGhlIHVzZXIgdG8gc2VsZWN0IGFuIGFjY291bnQgZWFjaCB0aW1lIHRoZXkgc2lnbiBpbiBcbn0pKTtcblxuLy8gQ2FsbGJhY2sgcm91dGUgZm9yIEdvb2dsZSB0byByZWRpcmVjdCB0b1xuQXV0aFJvdXRlci5nZXQoJy9nb29nbGUvY2FsbGJhY2snLCBfcGFzc3BvcnRbXCJkZWZhdWx0XCJdLmF1dGhlbnRpY2F0ZSgnZ29vZ2xlJywge1xuICBmYWlsdXJlUmVkaXJlY3Q6ICcvJ1xufSksIC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShyZXEsIHJlcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXMucmVkaXJlY3QocmVkaXJlY3RVcmwpO1xuICAgICAgICAvLyBSZWRpcmVjdCB0byB0aGUgYWNjb3VudC9ob21lIHBhZ2UgKENsaWVudCBzaWRlKSBhZnRlciBhdXRoXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZSk7XG4gIH0pKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChfeCwgX3gyKSB7XG4gICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG5cbi8vIFVzZXIgcHJvZmlsZSByb3V0ZVxuQXV0aFJvdXRlci5nZXQoJy9wcm9maWxlJywgLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYyID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0pKC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JbXCJkZWZhdWx0XCJdLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIocmVxLCByZXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyJChfY29udGV4dDIpIHtcbiAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIGlmIChyZXEuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgICAgICAgIHJlcy5qc29uKHJlcS51c2VyKTsgLy8gUmV0dXJuIHRoZSBhdXRoZW50aWNhdGVkIHVzZXJcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oe1xuICAgICAgICAgICAgICBtZXNzYWdlOiAnVXNlciBub3QgYXV0aGVudGljYXRlZCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAxOlxuICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTIpO1xuICB9KSk7XG4gIHJldHVybiBmdW5jdGlvbiAoX3gzLCBfeDQpIHtcbiAgICByZXR1cm4gX3JlZjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG5cbi8vIExvZ291dCBlbmRwb2ludFxuQXV0aFJvdXRlci5wb3N0KCcvbG9nb3V0JywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIHJlcS5sb2dvdXQoZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChlcnIpIHJldHVybiBuZXh0KGVycik7XG4gICAgcmVxLnNlc3Npb24gPSBudWxsOyAvLyBDbGVhciBzZXNzaW9uIGRhdGFcbiAgICByZXMucmVkaXJlY3QoJy9sb2dnZWRvdXQnKTsgLy8gUmVkaXJlY3QgYWZ0ZXIgbG9nb3V0XG4gIH0pO1xufSk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IEF1dGhSb3V0ZXI7Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOztBQUVaLElBQUlBLHNCQUFzQixHQUFHQyxPQUFPLENBQUMsOENBQThDLENBQUM7QUFDcEZDLE1BQU0sQ0FB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