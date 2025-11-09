import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth-routes.js";
import taskRoutes from "./routes/task-route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("app/tasks", taskRoutes);

// app.use("/api/users", userRoutes);

// app.use(errorHandler);

export default app;
