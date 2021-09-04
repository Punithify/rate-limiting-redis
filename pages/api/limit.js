import { check } from "../../src/bucket";

export default async function handler(req, res) {
  if (req.method === "GET") {
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
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `${req.method} is not allowed` });
  }
}
