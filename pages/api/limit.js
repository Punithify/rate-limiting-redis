import { check } from "../../src/bucket";

export default async function handler(req, res) {
  const { allowed, remaining } = await check("dheera");

  res.status(200).json({ allowed, remaining });
}
