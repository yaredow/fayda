"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function Home() {
	const onSubmit = async () => {
		authClient.signIn.oauth2({
			providerId: "fayda",
		});
	};
	return (
		<main className="bg-background">
			<div className="flex items-center justify-center min-h-screen">
				<Button onClick={onSubmit}>Sign In</Button>
			</div>
		</main>
	);
}
