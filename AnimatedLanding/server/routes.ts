import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fs from "fs/promises";
import path from "path";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static assets from root directory
  app.use(express.static(process.cwd()));

  // Serve online.txt content
  app.get("/online.txt", async (_req, res) => {
    try {
      const content = await fs.readFile(path.join(process.cwd(), "online.txt"), "utf-8");
      res.type("text/plain").send(content);
    } catch (error) {
      res.status(500).send("Error reading online count");
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}