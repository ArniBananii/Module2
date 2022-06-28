import express from "express";
import healthStatus from "../controller/status.js";

const statusResourcePaths = express.Router();

// GET health status endpoint
statusResourcePaths.get("/health", healthStatus);

export { statusResourcePaths };
