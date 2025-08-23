import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // Rate limiting logic here
    const { success } = await ratelimit.limit("my-limit-key");
    if (!success) {
      return res.status(429).json({ message: "Too many requests" });
    }
    next();
  } catch (error) {
    res.status(429).json({ message: "Too many requests" });
  }
};
export default rateLimiter;
