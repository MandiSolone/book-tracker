"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;
var _dotenv = _interopRequireDefault(require("dotenv")); //A Node.js package depenecy that needs to be instaled

// Load environment variables
var envFound = _dotenv["default"].config();
if (!envFound) {
  throw new Error("Couldn't find .env!");
}

// exports configuration
var _default = exports["default"] = {
  mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA
  },
  port: parseInt(process.env.PORT),
  oauth: {
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    sessionSecret: process.env.SESSION_SECRET
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZG90ZW52IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJlbnZGb3VuZCIsImNvbmZpZyIsIkVycm9yIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibXlzcWwiLCJob3N0IiwicHJvY2VzcyIsImVudiIsIkRCX0hPU1QiLCJ1c2VyIiwiREJfVVNFUiIsInBhc3N3b3JkIiwiREJfUEFTUyIsImRhdGFiYXNlIiwiREJfU0NIRU1BIiwicG9ydCIsInBhcnNlSW50IiwiUE9SVCIsIm9hdXRoIiwiZ29vZ2xlQ2xpZW50SWQiLCJHT09HTEVfQ0xJRU5UX0lEIiwiZ29vZ2xlQ2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJzZXNzaW9uU2VjcmV0IiwiU0VTU0lPTl9TRUNSRVQiXSwic291cmNlcyI6WyIuLi8uLi9jb25maWcvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9BIE5vZGUuanMgcGFja2FnZSBkZXBlbmVjeSB0aGF0IG5lZWRzIHRvIGJlIGluc3RhbGVkXG5pbXBvcnQgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcblxuLy8gTG9hZCBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbmNvbnN0IGVudkZvdW5kID0gZG90ZW52LmNvbmZpZygpO1xuaWYgKCFlbnZGb3VuZCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIC5lbnYhXCIpO1xufVxuXG4vLyBleHBvcnRzIGNvbmZpZ3VyYXRpb25cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbXlzcWw6IHtcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICAgIHVzZXI6IHByb2Nlc3MuZW52LkRCX1VTRVIsXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1MsXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX1NDSEVNQSxcbiAgfSxcbiAgcG9ydDogcGFyc2VJbnQocHJvY2Vzcy5lbnYuUE9SVCksXG4gIG9hdXRoOiB7XG4gICAgZ29vZ2xlQ2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgZ29vZ2xlQ2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICBzZXNzaW9uU2VjcmV0OiBwcm9jZXNzLmVudi5TRVNTSU9OX1NFQ1JFVCxcbiAgfSxcbn07XG4iXSwibWFwcGluZ3MiOiI7QUFDQSxJQUFBQSxPQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUEsWUFBNEIsQ0FENUI7O0FBR0E7QUFDQSxJQUFNQyxRQUFRLEdBQUdILE9BQUEsV0FBTSxDQUFDSSxNQUFNLENBQUMsQ0FBQztBQUNoQyxJQUFJLENBQUNELFFBQVEsRUFBRTtFQUNiLE1BQU0sSUFBSUUsS0FBSyxDQUFDLHFCQUFxQixDQUFDO0FBQ3hDOztBQUVBO0FBQUEsSUFBQUMsUUFBQSxHQUFBQyxPQUFBLGNBQ2U7RUFDYkMsS0FBSyxFQUFFO0lBQ0xDLElBQUksRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE9BQU87SUFDekJDLElBQUksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLE9BQU87SUFDekJDLFFBQVEsRUFBRUwsT0FBTyxDQUFDQyxHQUFHLENBQUNLLE9BQU87SUFDN0JDLFFBQVEsRUFBRVAsT0FBTyxDQUFDQyxHQUFHLENBQUNPO0VBQ3hCLENBQUM7RUFDREMsSUFBSSxFQUFFQyxRQUFRLENBQUNWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVSxJQUFJLENBQUM7RUFDaENDLEtBQUssRUFBRTtJQUNMQyxjQUFjLEVBQUViLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYSxnQkFBZ0I7SUFDNUNDLGtCQUFrQixFQUFFZixPQUFPLENBQUNDLEdBQUcsQ0FBQ2Usb0JBQW9CO0lBQ3BEQyxhQUFhLEVBQUVqQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2lCO0VBQzdCO0FBQ0YsQ0FBQyIsImlnbm9yZUxpc3QiOltdfQ==