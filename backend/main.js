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
const passRoute = require("./routes/pass.route.js");
const {
  authenticateUser,
  authorizeRoles,
} = require("./middleware/auth.middleware.js");
require("dotenv").config();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
app.use("/api", paymentRoute);
// app.use("/api", eventRoutes);
app.use("/stage", stageRoutes);
app.use("/api", userRoutes);
app.use("/api", eventRoute);
app.use("/api", passRoute);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
