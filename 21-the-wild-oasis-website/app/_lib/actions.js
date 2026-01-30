"use server";

import { redirect } from "next/navigation";

export async function signInAction() {
  redirect("/api/auth/signin");
}

export async function signOutAction() {
  redirect("/api/auth/signout");
}
