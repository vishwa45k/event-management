const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const eventRoutes = require("./routes/routes.js");
const stageRoutes = require("./routes/stageroute.js");
const router = require("./routes/routes.js");
const app = express();
const userRoutes = require("./routes/user.route.js");
const eventRoute = require("./routes/events.route.js");
const paymentRoute = require("./routes/payment.route.js");
const {
  authenticateUser,
  authorizeRoles,
} = require("./middleware/auth.middleware.js");
require("dotenv").config();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h2>Hello from Express.js server!!</h2>");
});

connectDB();
app.use("/api", paymentRoute);
// app.use("/api", eventRoutes);
// app.use("/stage", stageRoutes);
// app.use("/api", router);
app.use("/api", userRoutes);
app.use("/api", eventRoute);
//  authenticateUser, authorizeRoles("staff"),
const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
