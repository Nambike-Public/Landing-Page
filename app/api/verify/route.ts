// app/api/verify/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return new NextResponse("Invalid token", { status: 400 });
  }

  const { data, error } = await supabase
    .from("submissions_verified")
    .select("*")
    .eq("token", token)
    .single();

  if (error || !data) {
    return new NextResponse("Invalid or expired token", { status: 400 });
  }

  await supabase
    .from("submissions_verified")
    .update({ verified: true })
    .eq("id", data.id);

  return new NextResponse("✅ Your email has been verified!", { status: 200 });
}
