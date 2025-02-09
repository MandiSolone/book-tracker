import _defineProperty from "@babel/runtime/helpers/defineProperty";import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}import _regeneratorRuntime from "@babel/runtime/regenerator";import query from "../db/utils.js"; // Connects mysql wrapped in a promise from db query

export var findAll = /*#__PURE__*/function () {var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {var user_id, sql, params, results;return _regeneratorRuntime.wrap(function _callee$(_context) {while (1) switch (_context.prev = _context.next) {case 0:user_id = _ref.user_id;
          sql = "SELECT * FROM books WHERE user_id = ?";
          params = [user_id];_context.next = 5;return (
            query(sql, params));case 5:results = _context.sent;return _context.abrupt("return",
          results);case 7:case "end":return _context.stop();}}, _callee);}));return function findAll(_x) {return _ref2.apply(this, arguments);};}();


var findOne = /*#__PURE__*/function () {var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee2(book_id, user_id) {var sql, params, results;return _regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) switch (_context2.prev = _context2.next) {case 0:
          sql = "SELECT * FROM books WHERE book_id = ? AND user_id = ?";
          params = [book_id, user_id];_context2.next = 4;return (
            query(sql, params));case 4:results = _context2.sent;return _context2.abrupt("return",

          results.length > 0 ? results[0] : null);case 6:case "end":return _context2.stop();}}, _callee2);}));return function findOne(_x2, _x3) {return _ref3.apply(this, arguments);};}();


var addOne = /*#__PURE__*/function () {var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee3(newBook) {var sql, params, result, bookWithId;return _regeneratorRuntime.wrap(function _callee3$(_context3) {while (1) switch (_context3.prev = _context3.next) {case 0:
          sql = "INSERT INTO books SET ?"; // No need for WHERE clause here
          params = newBook; // Directly use the newBook object
          _context3.prev = 2;_context3.next = 5;return (
            query(sql, params));case 5:result = _context3.sent;
          // Construct the new book object including its Id
          bookWithId = _objectSpread({
            book_id: result.insertId },
          newBook);return _context3.abrupt("return",

          bookWithId);case 10:_context3.prev = 10;_context3.t0 = _context3["catch"](2);

          console.error("Insert Error:", _context3.t0);throw _context3.t0;case 14:case "end":return _context3.stop();}}, _callee3, null, [[2, 10]]);}));return function addOne(_x4) {return _ref4.apply(this, arguments);};}();




var updateOne = /*#__PURE__*/function () {var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee4(updatedBook, book_id, user_id) {var sql, params, result;return _regeneratorRuntime.wrap(function _callee4$(_context4) {while (1) switch (_context4.prev = _context4.next) {case 0:
          sql =
          "UPDATE books SET title = ?, authors = ?, comments = ?, link = ?, image = ?, type = ?, location = ?, status = ?, rating = ?, user_id = ? WHERE book_id = ?";
          params = [
          updatedBook.title,
          updatedBook.authors,
          updatedBook.comments,
          updatedBook.link,
          updatedBook.image,
          updatedBook.type,
          updatedBook.location,
          updatedBook.status,
          updatedBook.rating,
          user_id,
          book_id];_context4.next = 4;return (


            query(sql, params));case 4:result = _context4.sent;return _context4.abrupt("return",
          result);case 6:case "end":return _context4.stop();}}, _callee4);}));return function updateOne(_x5, _x6, _x7) {return _ref5.apply(this, arguments);};}();


var removeOne = /*#__PURE__*/function () {var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee5(bookID) {return _regeneratorRuntime.wrap(function _callee5$(_context5) {while (1) switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
            query("DELETE FROM books WHERE book_id = ?", [bookID]));case 2:return _context5.abrupt("return", _context5.sent);case 3:case "end":return _context5.stop();}}, _callee5);}));return function removeOne(_x8) {return _ref6.apply(this, arguments);};}();


export default {
  findAll: findAll,
  findOne: findOne,
  addOne: addOne,
  updateOne: updateOne,
  removeOne: removeOne
};
//# sourceMappingURL=books.controllers.js.map