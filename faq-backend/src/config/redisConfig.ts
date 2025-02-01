import { createClient } from "redis";

const redisClient = createClient();
// console.log("control")
redisClient.connect();
// console.log("control2")

redisClient.on("error", (err) => console.error("Redis error:", err));

export default redisClient;
