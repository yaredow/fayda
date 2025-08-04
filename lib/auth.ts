import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import { fayda } from "fayda";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
	}),
	plugins: [
		await fayda({
			clientId: process.env.CLIENT_ID as string,
			privateKey: process.env.PRIVATE_KEY as string,
		}),
	],
});
