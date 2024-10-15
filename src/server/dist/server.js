import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";import _regeneratorRuntime from "@babel/runtime/regenerator";import express from "express";
import morgan from "morgan"; // For logging
import cors from "cors"; //
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import apiRouter from "./routes/index.js"; // Aggregated routes
import config from "./config/index.js"; // The config file mysql, port, oauth
import { errorHandler } from "./middlewares/errorHandler.js";
//OAuth and Redis
import passport from "passport"; // From auth.routes
import session from "express-session"; // Dev & Prod session stors for user info
import RedisStore from "connect-redis";
import { createClient } from "redis";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import authRouter from "./routes/auth.routes.js"; // Import the new auth routes
// resp from mysqlUrls> promise>query>UserDbTable>output here
import {
  googleAuthCallback,
  serializeUser,
  deserializeUser } from
"./controllers/auth.controller.js";

// Main async function
var startServer = /*#__PURE__*/function () {var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee() {var redisUrl, redisClient, app, sessionStore, corsOptions, __filename, __dirname, staticPath;return _regeneratorRuntime.wrap(function _callee$(_context) {while (1) switch (_context.prev = _context.next) {case 0:
          // Determine Redis URL based on environment (dev or prod)
          redisUrl = process.env.REDISCLOUD_URL || "redis://localhost:6379";
          redisClient = createClient({ url: redisUrl });

          console.log("server - redisUrl:", redisUrl);
          console.log("server - redisClient:", redisClient);

          // Connect to the Redis client
          _context.prev = 4;_context.next = 7;return (
            redisClient.connect());case 7:
          console.log("server - Connected to Redis");

          // Initialize your Express app here
          app = express();

          // Configure the session store
          sessionStore = new RedisStore({ client: redisClient });
          console.log("server - sessionStore:", sessionStore);

          // OAuth session middleware
          // Has to be at the top, before initalizing Passport and defining any routes
          app.use(
            session({
              store: sessionStore,
              secret: config.oauth.sessionSecret, // Use session secret from config
              resave: false,
              saveUninitialized: true, // Create a seesion for every user that accesse site, even if they haven't auth.
              // saveUninitialized: false, //recommended, especially if you're concerned about session storage efficiency and want to avoid creating empty sessions.
              cookie: {
                secure: false, // Tempararily set to dales for debugging
                // secure: process.env.NODE_ENV === "production", // Set secure to true only in production
                httpOnly: true, // Recommended for security
                sameSite: "lax", // helps mitigate CSRF attacks by allowing cookies to be sent only in first-party contexts
                maxAge: 24 * 60 * 60 * 1000 // 1 day (optional, adjust as needed)
              },
              rolling: true, // Reset cookie expiration on each request
              unset: "destroy" // Destroy sessions when they are no longer needed
            })
          );

          // // Async function to test Redis connection
          // const testRedisConnection = async () => {
          //   try {
          //     await redisClient.set("test_key", "test_value");
          //     const value = await redisClient.get("test_key");
          //     console.log(`server - Value from Redis: ${value}`); // Should output: test_value
          //   } catch (error) {
          //     console.error("server - Redis Operation Error", error);
          //   }
          // };

          // // Call the async function
          // await testRedisConnection();

          //console.loging the session//delete later
          // app.use((req, res, next) => {
          //   console.log(
          //     "server - Session before authentication: - delete this console.log later",
          //     {
          //       store: sessionStore,
          //       session: req.session,
          //     }
          //   );
          //   next();
          // });

          // Initialize Passport Library
          app.use(passport.initialize());
          app.use(passport.session());

          // Middleware, Parses inc req and attaches JSON to body parameter of the request object
          app.use(express.json());

          // CORS is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the resource originated. By specifying an exact origin, you allow requests only from that domain, while blocking others.
          // Good for using multi domains
          corsOptions = {
            origin: process.env.CLIENT_URL || "http://localhost:3000", // React app URL
            credentials: true // Allow credentials to be sent
          };
          app.use(cors(corsOptions));

          // Logs incoming request information to the dev console (url, resp, req)
          app.use(morgan("dev"));

          // Passport configuration for Google OAuth
          passport.use(
            new GoogleStrategy(
              {
                clientID: config.oauth.googleClientId, //config/index.js
                clientSecret: config.oauth.googleClientSecret,
                callbackURL: process.env.GOOGLE_CALLBACK_URL // Google Callback URL in .env
              },
              googleAuthCallback
            )
          );

          // Serialize and deserialize user
          // Add these lines after session middleware and before defining routes
          passport.serializeUser(serializeUser);
          passport.deserializeUser(deserializeUser);

          // Define routers
          app.use("/api", apiRouter);
          app.use("/auth", authRouter);

          // Serve static files from the React app (front end) __dirname
          __filename = fileURLToPath(import.meta.url);
          __dirname = dirname(__filename);
          staticPath = path.join(__dirname, "..", "../client/build");
          console.log("server - Serving static files from:", staticPath);
          app.use(express["static"](staticPath));

          // Handle GET all requests to serve the React app (front end)
          app.get("*", function (req, res) {
            res.sendFile(path.join(staticPath, "index.html"));
          });

          // Default Error handler middleware, place code at the bottom
          app.use(errorHandler);

          // Bind the app to a specified port
          app.listen(config.port || 8080, function () {return (
              console.log("Server listening on port ".concat(config.port, "...")));}
          );_context.next = 36;break;case 33:_context.prev = 33;_context.t0 = _context["catch"](4);

          console.error("server - Redis Client Connection Error", _context.t0);case 36:case "end":return _context.stop();}}, _callee, null, [[4, 33]]);}));return function startServer() {return _ref.apply(this, arguments);};}();



// Start the server
startServer();
//# sourceMappingURL=server.js.map