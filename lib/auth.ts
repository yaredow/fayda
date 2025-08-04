import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { fayda } from "fayda";
import { db } from "@/db";

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
	account: {
		accountLinking: {
			enabled: true,
			trustedProviders: ["fayda"],
		},
	},
});
