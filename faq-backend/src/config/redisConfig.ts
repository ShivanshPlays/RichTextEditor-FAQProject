import { createClient } from "redis";

const redisClient = createClient();

redisClient.connect();

redisClient.on("error", (err) => console.error("Redis error:", err));

export default redisClient;
