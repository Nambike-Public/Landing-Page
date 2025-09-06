// pages/api/admin-submissions.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY! // Full access key (never expose in frontend!)
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { data, error } = await supabase.from("submissions").select("*");

  if (error) return res.status(500).json({ error: error.message });

  return res.status(200).json({ submissions: data });
}
