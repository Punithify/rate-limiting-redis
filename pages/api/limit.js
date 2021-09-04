import { check } from "../../src/bucket";

export default async function handler(req, res) {
  const { allowed, remaining } = await check("dheera");
  if (!allowed) {
    return res.json({
      message: "Not allowed to send requests",
      allowed,
      remaining,
    });
  }

  res
    .status(200)
    .json({ message: "You are allowed to send request", allowed, remaining });
}
